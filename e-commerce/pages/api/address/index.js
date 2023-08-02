
import Address from "@/models/Address";
import dbConnect from "@/lib/dbConnect";

const handler = async (req, res) => {
  await dbConnect();
  const { method } = req;

  if (method === "GET") {
    try {
      const adress = await Address.find();
      res.status(200).json(adress);
    } catch (err) {
      console.log(err);
    }
  }
  if (method === "POST") {
    try {
      const address = await Address.create(req.body);
      res.status(200).json({ message: "Adres başarıyla güncellendi." });
    } catch (err) {
      console.error(err); // Hatanın loglanması
    }
  }
};

export default handler;
