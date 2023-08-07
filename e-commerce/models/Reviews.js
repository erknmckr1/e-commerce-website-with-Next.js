import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    review:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
},
{timestamps:true})

export default mongoose.models.Rewievs || mongoose.model("Rewievs",reviewSchema)