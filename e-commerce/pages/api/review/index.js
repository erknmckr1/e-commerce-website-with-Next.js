import Reviews from "@/models/Reviews";

const handler = async (req, res) => {
  const { method } = req;

  if (method === "GET") {
    try {
      const reviews = await Reviews.find();
      res.status(200).json(reviews);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "An error occurred while fetching reviews." });
    }
  } else if (method === "POST") {
    try {
      const newReview = await Reviews.create(req.body);
      res.status(200).json({ message: "New review created" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "An error occurred while creating the review." });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
};

export default handler;