const router = require("express").Router();
const admin = require("firebase-admin");
const db = admin.firestore();

router.post("/create", async (req, res) => {
    try {
        const data = {
            product_name: req.body.product_name,
            product_category: req.body.product_category,
            product_price: req.body.product_price,
            imageURL: req.body.imageURL,
        };
        const docRef = await db.collection("products").add(data);
        return res.status(200).send({ success: true, id: docRef.id });
    } catch (err) {
        return res.status(500).send({ success: false, msg: `Error: ${err.message}` });
    }
});

router.get("/all", async (req, res) => {
    try {
        const querySnapshot = await db.collection("products").get();
        const response = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));
        return res.status(200).send({ success: true, data: response });
    } catch (err) {
        return res.status(500).send({ success: false, msg: `Error: ${err.message}` });
    }
});
// delete a product
router.delete("/delete/:productId" , async(req,res) =>{
    const productId = req.params.productId;
    try {
        await db.collection("products").doc('/${productId}/').delete().then((result) => {
            return res.status(200).send({success: true, data: result});
        });
        
    } catch (err) {
        return res.status(500).send({ success: false, msg: `Error: ${err.message}` });
        
    }

})
module.exports = router;
