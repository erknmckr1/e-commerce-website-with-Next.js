import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import bcrypt from "bcrypt"
const handler = async (req, res) => {
  await dbConnect();
  const {
    method,
    query: { id },
  } = req;

  if (method === "GET") {
    try {
      const user = await User.findById(id);
      res.status(200).json({ user });
    } catch (err) {
      console.log(err);
    }
  }

  if (method === "PUT") {
    try {
      if (req.body.password) {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        req.body.confirmPassword = await bcrypt.hash(
          req.body.confirmPassword,
          10
        );
      }
      const updateUser = await User.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(updateUser);
    } catch (err) {
      console.log(err);
    }
  }
};

export default handler;
