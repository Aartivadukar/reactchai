const mongoose =require("mongoose");

const commentSchema=mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"post",
    },
    userName:{
        type:String,
        require:true
    },
    body:{
        type:String,
        require:true
    }
    
})

module.exports=mongoose.model("comment",commentSchema);