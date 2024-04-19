const router = require("express").Router();
const admin = require("firebase-admin");
const { QuerySnapshot } = require("firebase-admin/firestore");
const db = admin.firestore()

router.post("/create", async(req,res) => {
    try {
        const id = Date.now();
        const data = {
            product_name: req.body.product_name,
            product_category: req.body.product_category,
            product_price: req.body.product_price,
            imageURL: req.body.imageURL,
        };
        const response = await db.collection("product").doc('/${id}/').set(data);
        return res.status(200).send({sucess: true, data:response});
        
    } catch (err) {
        return res.send({sucess:false, msg: 'Error:${err}'});
    }
});

// get all the products
router.get("/all", async(req , res) => {
    (async() => {
        try {
            let query = db.collection("product");
            let response = [];
            await query.get().then(querysnap => {
                let docs = querysnap.docs;
                docs.map(doc => {
                    response.push({...doc.data() });
                });
                return response;
            });
            return res.status(200).send({sucess: true, data:response});
        } catch (error) {
            return res.send({sucess: false, msg: 'Error:${err}'});
        }
    })
})
module.exports = router;