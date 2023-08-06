import dbConnect from "@/lib/dbConnect";
import Footer from "@/models/Footer";

const handler = async (req, res) => {

  const { method } = req;

  if(method === "GET"){
        try{
        const footer = await Footer.find();
        res.status(200).json(footer);
        }catch(err){
            console.log(err)
        }
    }


  if(method === "POST"){
    try{
        const newFooter = await Footer.create(req.body);
        res.status(200).json(newFooter)
    }catch(err){
        console.log(err)
    }
  }
};

export default handler;