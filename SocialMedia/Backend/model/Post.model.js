
const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
     content :{type:String, minlength:1, maxlength:300},
     created_at:{type:Date,default: Date.now},
      updated_at:{ type: Date,default: Date.now},
      like:{type:Number, default:0}
})
const PostModal=  mongoose.model("post", postSchema);
module.exports={
    PostModal
}