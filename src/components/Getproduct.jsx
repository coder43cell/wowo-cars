import React,{useState,useEffect} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Carousel from "./Carousel";
import Footer from "./Footer";
import BrandTicker from "./Ticker";
import ChatBot from "./ChatBot";
const Getproduct=()=>{
    
    let navigate = useNavigate();
    // declare states 
    const[loading,setLoading]=useState("")
    const[products,setProducts]=useState([])
    const[error,setError]=useState("")
    const[search,setSearch]=useState("")
    const[visibleCount,setVisibleCount]=useState(8)

    // filter logic (search) 
    const filtered_products=products.filter((item)=>
    item.product_name.toLowerCase().includes(search.toLowerCase())||
    item.product_description.toLowerCase().includes(search.toLowerCase()))

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
         <div className="get-container">

        <div className="row">
        {/* search bar goes here  */}
       
        <div className="row justify-content-center mt-3 mb-4">
            <input
            className="form-control w-50"
            type="search"
            placeholder="search products...."
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            />
        </div>


        {/* carousel goes here  */}
        <Carousel/>
        <BrandTicker/>
        <h1 className="text-info">Available products</h1>
        {/* bind the states  */}
        <h2 className="text-warning">{loading}</h2>
        <h2 className="text-danger">{error}</h2>
        {/* map here  */}
        {filtered_products.slice(0,visibleCount).map((singleproduct)=>(

            <div className="col-md-3  mb-4 ">
                <div className="card shadow h-100 btn btn-dark ">

                {/* image goes here  */}
                <img src={imagepath+singleproduct.product_photo} alt="" style={{height:"200px",objectFit:"contain"}}/>
             <div className="card-body ">
                <h2 className="text-info">{singleproduct.product_name}</h2>
                <p>{singleproduct.product_description}</p>
                <b className="text-warning">Ksh {singleproduct.product_cost}</b><br />
                <button className="btn btn-outline-info w-100" onClick={()=>navigate("/makepayment",{state:{singleproduct}})}>Purchase now</button>
                </div>
                </div>
            </div>
            ))}
            {/* load more button goes here  */}
            {visibleCount<filtered_products.length &&(
                <div className="text-center mt-4">
                    <button 
                     className="btn btn-primary" onClick={()=>setVisibleCount(visibleCount+8)}>
                        Load More 

                    </button>
                </div>
            )}
            <div style={{
  position: "fixed",
  bottom: "20px",
  right: "20px",
  zIndex: 1000,
}}>
  <ChatBot />
</div>

            <Footer/>
       </div>
         </div>
    )
}
export default Getproduct