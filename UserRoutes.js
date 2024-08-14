const express=require("express")
const router=express.Router()
const{createUser,getUser,getsingleUser,updateUser,deleteUser}=require("../Controllers/UserControllers")

router.post("/post/api",createUser)
router.get("/get/api",getUser)
router.get("/getbyid/api/:id",getsingleUser)
router.post("/update/api/:id",updateUser)
router.post("/delete/api/:id",deleteUser)

module.exports=router