import Order from "@/models/Order";
import dbConnect from "@/lib/dbConnect";
const handler = async (req,res) => {
    await dbConnect();
    const {method} = req;

    if(method === "POST"){
        try {
            const order = await Order.create(req.body);
            res.status(200).json({message: "Sipariş Başarıyla Oluşturuldu!"})
        } catch (err) {
            console.log(err); // Hatayı loglama
            res.status(500).json({error: "Sipariş Oluşturma Hatası!"});
        }
    }

    if(method === "GET"){
        try {
            const orders = await Order.find();
            res.status(200).json(orders)
        } catch (err) {
            
        }
    }
}

export default handler;