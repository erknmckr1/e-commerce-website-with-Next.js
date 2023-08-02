import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  addressTitle: {
    type: String,
    required: true,
  },
  checked:{
    type:Boolean,
  },
  email:{
    type:String,
    required:true
  }
});

export default mongoose.models.Address ||
  mongoose.model("Address", AddressSchema);
