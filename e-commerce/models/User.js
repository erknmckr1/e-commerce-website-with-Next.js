import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName:{
        type: String,
        required: true,
      },
      lastName:{
        type: String,
      },
      email:{
        type:String,
        required:true
      },
      password:{
        type:String,
        required:true
      },
      confirmPassword: {
        type:String,
        required:true
      },
      phoneNumber:{
        type: String,
      },
      gender:{
        type: String,
      },
      image:{
        type:String
      },
      day:{
        type:String
      },
      mounth:{
        type:String
      },
      year:{
        type:String
      },
      saved:{
        type:[String],
        default:[]
      }
  },
  {timestamps:true}

);

export default mongoose.models.User || mongoose.model("User",UserSchema);