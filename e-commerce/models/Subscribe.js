import mongoose from "mongoose";

const SubsSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Subscribe || mongoose.model("Subscribe",SubsSchema)