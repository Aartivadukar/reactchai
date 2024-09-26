const postModel=require("../models/postModel");

const postController=async(req,res)=>{
    try {
        const {title,body}=req.body;
        const post=new postModel({title,body});
        const newPost=await post.save();

        res.status(200).json({
            success:true,
            data:newPost,
            massage:"post created"
        })
    } catch (err) {
        res.status(500).json({
            success:false,
            error:error.massage,
            massage:"some server error"
        })
    }
};

const getAllPost=async(req,res)=>{
   try {
     const posts=await postModel.find().populate("comment").populate("like").exec();
     res.json({
         success:true,
         data:posts
     })
   } catch (error) {
    res.status(500).json({
        success:false,
        err:error.massage,
        massage:"some data error in server"
    })
    
   }
}
module.exports={postController,getAllPost};