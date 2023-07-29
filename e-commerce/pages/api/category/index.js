import dbConnect from "@/lib/dbConnect";
import Category from "@/models/Category";

const handler = async (req, res) => {
  dbConnect();
  const { method } = req;

  if (method === "POST") {
    const category = await Category.findOne({ title: req.body.title });

    if (category) {
      console.log("Category is already added!");
      return res.status(400).json({message:"Category is already added!"})
    }

    try {
      const category = await new Category(req.body);
      category.save();
      res.status(200).json(category);
    } catch (err) {
      console.log(err);
    }
  }
};

export default handler;
