const express=require("express")
const router=express.Router()
const{createService,getService,getsingleService,updateService,deleteService, getServiceNameOnly}=require("../Controllers/ServiceControllers")

router.post("/post/api",createService)
router.post("/get/api",getService)
router.post("/getbyid/api/:id",getsingleService)
router.post("/update/api/:id",updateService)
router.post("/delete/api/:id",deleteService)
router.post("/getServiceNameOnly/api",getServiceNameOnly)
module.exports=router