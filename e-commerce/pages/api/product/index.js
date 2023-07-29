import dbConnect from "@/lib/dbConnect";
import Product from "@/models/Product";

const handler = async (req, res) => {
  dbConnect();
  const { method } = req;

  if (method === "GET") {
    try {
        const products = await Product.find();
        res.status(200).json(products)
    } catch (err) {
      console.log(err);
    }
  }

  if (method === "POST") {
    try {
      const newProduct = await new Product(req.body);
      await newProduct.save();
      res.status(200).json({ newProduct });
    } catch (err) {
      console.log(err);
    }
  }
};

export default handler ;