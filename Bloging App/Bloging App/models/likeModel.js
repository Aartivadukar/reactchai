const mongoose=require("mongoose");

const likeSchema=mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"post"
    },
    userName:{
        type:String,
        require:true
    },
})

module.exports=mongoose.model("like",likeSchema);