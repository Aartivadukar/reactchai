const express=require("express");
const router=express.Router();

const { postController, getAllPost }=require("../controller/postCreate");
const comments=require("../controller/commentcontroller");
const {postLike,unLikePost}=require("../controller/createLike");


router.post("/postCreate",postController);
router.get("/getPost",getAllPost);
router.post("/createComment",comments);
router.post("/createLike",postLike);
router.post("/unLikePost",unLikePost);



module.exports=router;