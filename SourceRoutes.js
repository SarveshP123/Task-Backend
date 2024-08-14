const express=require("express")
const router=express.Router()
const{createSource,getSource,getsingleSource,updateSource,deleteSource, getSourceNameOnly}=require("../Controllers/SourceControllers")

router.post("/post/api",createSource)
router.post("/get/api",getSource)
router.post("/getbyid/api/:id",getsingleSource)
router.post("/update/api/:id",updateSource)
router.post("/delete/api/:id",deleteSource)
router.post("/getSourceNameOnly/api",getSourceNameOnly)


module.exports=router