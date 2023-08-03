import Order from "@/models/Order";

const handler = async (req, res) => {
  const {
    method,
    query: { id },
  } = req;

  if (method === "PUT") {
    const order = await Order.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ message: "Order successfully updated!" });
  }


  if (method === "DELETE") {
    try {
      const orderDelete = await Order.findByIdAndDelete(id);
      res.status(200).json({ message: "Order successfully updated!" });
    } catch (err) {
      console.log(err);
    }
  }
};

export default handler; 
