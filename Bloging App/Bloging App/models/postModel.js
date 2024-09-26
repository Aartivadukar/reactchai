const mongoose=require("mongoose");

const postSchema=mongoose.Schema(
    {
        title:{
            type:String,
            require:true,
            maxLength:50
        },
        body:{
            type:String,
            require:true,
        },
        like:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"like",
        }],
        comment:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"comment",
        }],
    }
);

module.exports=mongoose.model("post",postSchema);