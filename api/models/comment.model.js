import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({ //payload يلي بيرجعلي السيرفر منو معلومات 

    content: {
        type: String,
        required: true,
    },
    postId: {
        type: String,
        required: true,
    },
    userId:{
        type:String,
        required: true,
    },
    likes:{
        type:Array,
        default:[],
    },
    numberOfLikes: {
        type:Number,
        default:0,
    
    },
}, { timestamps:true}
);

const Comment = mongoose.model("Comment", commentSchema); //initalize that it is a mongo model

export default Comment;
