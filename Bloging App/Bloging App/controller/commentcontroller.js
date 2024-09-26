const postModel=require("../models/postModel");
const commentModel=require("../models/commentModel");

const createComment=async(req,res)=>{
    try {
        const {post,userName,body}=req.body;
        const comment=await commentModel.create({
            post,userName,body
        })
        const updatePost= await postModel.findByIdAndUpdate(post,{$push:{comment:comment._id}},{new:true})
                        .populate("comment")
                        .exec();


        res.status(200).json({
            success:true,
            data:updatePost,
            massage:"comment created",
        });
        
    } catch (err) {
        console.log(err);
       res.status(500).json({
        success:false,
        error:err.massage,
        massage:"some server error"
       }) 
    }
}

module.exports=createComment