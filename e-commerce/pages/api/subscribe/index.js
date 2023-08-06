import Subscribe from "@/models/Subscribe";

const handler = async (req, res) => {

    const { method } = req;
  
    if(method === "GET"){
          try{
          const subs = await Subscribe.find();
          res.status(200).json(subs);
          }catch(err){
              console.log(err)
          }
      }

    if(method === "POST"){
      try{
          const newSubs = await Subscribe.create(req.body);
          res.status(200).json(newSubs)
      }catch(err){
          console.log(err)
      }
    }
  };
  

  export default handler