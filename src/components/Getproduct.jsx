import React,{useState,useEffect} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Carousel from "./Carousel";
import Footer from "./Footer";
const Getproduct=()=>{
    
    let navigate = useNavigate();
    // declare states 
    const[loading,setLoading]=useState("")
    const[products,setProducts]=useState([])
    const[error,setError]=useState("")

    // function to get products 
    const getproducts=async()=>{
        setLoading("Please wait...")
        try{
            const response=await axios.get("https://adrianhiggs.alwaysdata.net/api/getproducts")
            setLoading("")
            setProducts(response.data)
        }
        catch(error){
             setError(error.message)
            setLoading("")

        }
    }
    // call function 
    useEffect(()=>{
        getproducts()
    },[])
    console.log(products)
    const imagepath="https://adrianhiggs.alwaysdata.net/static/images/"
   
    return(
       <div className="row">

        {/* carousel goes here  */}
        <Carousel/>
        <h1 className="text-info">Available products</h1>
        {/* bind the states  */}
        <h2 className="text-warning">{loading}</h2>
        <h2 className="text-danger">{error}</h2>
        {/* map here  */}
        {products.map(singleproduct=>(

            <div className="col-md-3  mb-4 ">
                <div className="card shadow h-100 btn btn-dark">

            {/* image goes here  */}
            <img src={imagepath+singleproduct.product_photo} alt="" style={{height:"200px",objectFit:"contain"}}/>
            <div className="card-body ">
                <h2 className="text-info">{singleproduct.product_name}</h2>
                <p>{singleproduct.product_description}</p>
                <b className="text-warning">Ksh {singleproduct.product_cost}</b><br />
                <button className="btn btn-info w-100" onClick={()=>navigate("/makepayment",{state:{singleproduct}})}>Purchase now</button>
            </div>
                </div>
        </div>
            ))}

            <Footer/>
       </div>
    )
}
export default Getproduct