const express=require("express")
const {createLogin,signin} = require("../Controllers/LoginControllers")
const router=express.Router()

router.post("/post/api",createLogin);
router.post("/get/api",signin);

module.exports = router;