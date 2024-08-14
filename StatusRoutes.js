const express=require("express")
const router=express.Router()
const{createStatus,getStatus,getsingleStatus,updateStatus,deleteStatus, getStatusNameOnly}=require("../Controllers/StatusControllers")

router.post("/post/api",createStatus)
router.post("/get/api",getStatus)
router.post("/getbyid/api/:id",getsingleStatus)
router.post("/update/api/:id",updateStatus)
router.post("/delete/api/:id",deleteStatus)
router.post("/getStatusNameOnly/api",getStatusNameOnly)
module.exports=router