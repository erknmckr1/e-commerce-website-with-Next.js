import Footer from "@/models/Footer";

const handler = async (req, res) => {

    const { method, query:{id} } = req;
  
    if(method === "PUT"){
          try{
          const footer = await Footer.findByIdAndUpdate(id,req.body,{new:true});
          res.status(200).json(footer);
          }catch(err){
              console.log(err)
          }
      }
  };


  export default handler;