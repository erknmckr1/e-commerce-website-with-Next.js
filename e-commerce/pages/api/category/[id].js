import Category from "@/models/Category";

const handler = async (req, res) => {
  const {
    method,
    query: { id },
  } = req;

  if (method === "POST") {
    console.log("x")
    try {
        
      const delCategory = await Category.findByIdAndDelete(id);
      res.status(200).json(delCategory);
    } catch (error) {
      console.log(err);
    }
  }
};

export default handler;
