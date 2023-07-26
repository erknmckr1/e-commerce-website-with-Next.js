import dbConnect from "@/lib/dbConnect";
import Admin from "@/models/Admin";
import bcrypt from "bcrypt";

const handler = async (req, res) => {
  dbConnect();
  const { method } = req;

  const adminUser = await Admin.findOne({ username: req.body.username });
  if (adminUser) {
    res.status(400).json({ message: "User already exist." });
    return;
  }

  if (method === "POST") {
    try {
      const admin = await new Admin(req.body);
      const salt = await bcrypt.genSalt(10);

      admin.password = await bcrypt.hash(admin.password, salt);
      await admin.save();
      res.status(200).json(admin);
    } catch (err) {
      console.log(err);
    }
  }
};

export default handler;
