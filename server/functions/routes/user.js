const router = require("express").Router();
const admin = require("firebase-admin");
let data = [];

//create an api endpoint
router.get("/", (req, res) => {
  return res.send("Inside the user router");
});

//create a route to validate JWT token
router.get("/jwtVerification", async (req, res) => {
  if (!req.headers.authorization) {
    return res.status(500).send({
      msg: "Token Not Found",
    });
  }

  const token = req.headers.authorization.split(" ")[1]; //Bearer <token>
  try {
    const decodedValue = await admin.auth().verifyIdToken(token);
    if (!decodedValue) {
      return res.status(500).json({
        success: false,
        msg: "Unauthorized access",
      });
    }
    return res.status(200).json({ success: true, data: decodedValue });
  } catch (err) {
    return res.send({
      success: false,
      msg: `Error in extracting the token : ${err}`,
    });
  }
});

const listAllUsers = (nextPageToken) => {
  admin
    .auth()
    .listUsers(1000, nextPageToken)
    .then((listUsersResult) => {
      listUsersResult.users.forEach((rec) => {
        data.push(rec.toJSON());
      });
      if (listUsersResult.pageToken) {
        listAllUsers(listUsersResult.pageToken);
      }
    })
    .catch((er) => {
      console.log(er);
    });
};
listAllUsers();

router.get("/all", async (req, res) => {
  listAllUsers();
  try {
    return res.status(200).send({ success: true, data: data, dataCount });
  } catch (err) {
    return res.send({
      success: false,
      msg: "Error in listing users :,${er}",
    });
  }
});

module.exports = router;
