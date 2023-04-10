const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
      name:{ type:String,required:true, minlength:1, maxlength:50},
      email: {type: String,required: true,trim: true, lowercase: true,
        validate: {
          validator: function (v) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
          },
          message: props => `${props.value} is not a valid email address!`
        }
      },
      bio:{type:String,maxlength:200},
      created_at:{type:Date,default: Date.now},
      updated_at:{ type: Date,default: Date.now}
})
  const MediaModal = mongoose.model("users",userSchema);
  module.exports={
  MediaModal
  }

