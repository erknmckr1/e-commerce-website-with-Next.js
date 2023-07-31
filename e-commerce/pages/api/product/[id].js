import Product from "@/models/Product";

const handler = async (req,res) => {
    const {method , query:{id}} = req; 

    if(method === "POST") {
        try {
            const deleteProduct = await Product.findByIdAndDelete(id)
            res.status(200).json("Product deleted!")
        } catch (err) {
            console.log(err)
        }
    }

    if(method==="PUT"){
        try {
            const updatedProduct = await Product.findByIdAndUpdate(id,req.body,{new:true})
            res.status(200).json("Product Updated!")
        } catch (err) {
            console.log(err)
        }
    }
    
}

export default handler