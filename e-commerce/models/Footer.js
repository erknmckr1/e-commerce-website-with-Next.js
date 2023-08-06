import mongoose from "mongoose";

const FooterSchema = new mongoose.Schema(
  {
    desc: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    links: [
      {
        link: { type: String, required: true },
        name: { type: String, required: true },
      },
    ],
    location: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Footer || mongoose.model("Footer", FooterSchema);
