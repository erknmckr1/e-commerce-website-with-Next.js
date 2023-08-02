import Address from "@/models/Address";

const handler = async (req,res) => {
    const {method, query:{id}} = req;


    if(method ==="DELETE"){
        try {
            const deleteAddress = await Address.findByIdAndDelete(id)
            res.status(200).json({message:"Address deleted successfully!"})
        } catch (err) {
            console.log(err)
        }
    }

    if(method ==="PUT"){
        try {
            const deleteAddress = await Address.findByIdAndUpdate(id,req.body,{new:true})
            res.status(200).json({message:"Address deleted successfully!"})
        } catch (err) {
            console.log(err)
        }
    }
}

export default handler