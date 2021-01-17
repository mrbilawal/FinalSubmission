const express = require("express");
let router = express.Router();
const validateproduct = require("../../middlewares/validateproduct");
const auth = require("../../middlewares/auth");
const admin = require("../../middlewares/admin");
var {Product} = require("../../models/product");
//get products
router.get("/", async (req,res)=>{
    console.log(req.user);
    let page = Number(req.query.page? req.query.page:1);
    let perpage = Number(req.query.perpage? req.query.perpage:10);
    let skipRecords = perpage*(page-1);
    let products = await Product.find().skip(skipRecords).limit(perpage);
    let total= await Product.countDocuments();
    return res.send({total,products});
});
//get single products
router.get("/:id", async (req,res)=>{
    try{
    let product = await Product.findById(req.params.id);
    if(!product)
    {
        return res.status(400).send("Product with given ID is not present");//when id is not present in db
    }
    return res.send(product);//everything is ok
    } catch (err){
        return res.status(400).send("Invalid ID");//format of id is not correct
    }
});
//update a single record
router.put("/:id",validateproduct,auth,admin,async (req,res)=>{
    let product = await Product.findById(req.params.id);
    product.interior = req.body.interior;
    product.exterior = req.body.exterior;
    product.description = req.body.description;
    product.Link = req.body.Link;
    await product.save();
    return res.send(product);
});
//delete a single record
router.delete("/:id",auth,admin,async (req,res)=>{
    let product = await Product.findByIdAndDelete(req.params.id);
    return res.send(product);
});
//insert a record
router.post("/",validateproduct,auth,async (req,res)=>{
    let product = new Product();
    product.interior = req.body.interior;
    product.exterior = req.body.exterior;
    product.description = req.body.description;
    product.Link = req.body.Link;
    await product.save();
    return res.send(product);
});


module.exports=router;