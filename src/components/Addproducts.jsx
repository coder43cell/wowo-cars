import axios from "axios"
import React,{useState} from "react"
import { useNavigate } from "react-router-dom"
const Addproduct=()=>{
    let navigate=useNavigate()
    // declare the states here 
    const[product_name ,setProductName]=useState("")
    const[product_description,setProductDescription]=useState("")
    const[product_cost,setProductCost]=useState("")
    const[product_photo,setProductPhoto]=useState("")
    // define 3 States for posting data 
    const[loading,setLoading]=useState("")
    const[success,setSuccess]=useState("")
    const[error,setError]=useState("")
    // function to handle submit 
    const handlesubmit=async(e)=>{
       e.preventDefault()
       setLoading("please wait...")
    //    create empty digital envelope to store user inputs 
    const formdata=new FormData()
    // append/add
    formdata.append("product_name",product_name)
    formdata.append("product_description",product_description)
    formdata.append("product_cost",product_cost)
    formdata.append("product_photo",product_photo)

    try{
        const response=await axios.post("https://adrianhiggs.alwaysdata.net/api/addproduct",formdata)
        setSuccess(response.data.message)
        setLoading("")
        if(response.data.user){
            localStorage.setItem("user",JSON.stringify(response.data.user))
            navigate("/")
        }
        else{
            setSuccess(response.data.message)
        }
    }
    catch(error){
         setError(error.message)
            setLoading("")
        
        }
        
        
        
    }
    return(
        <div className="add-container">

        <div className="row mt-2 justify-content-center">
            <div className="col-md-6  p-4">
           <h1 className="text-warning">Add products</h1>
             {/* bind the states  */}
          <h2 className="text-warning">{loading}</h2>
          <h2 className="text-success">{success}</h2>
          <h2 className="text-danger">{error}</h2>
 
          
            <form action="" onSubmit={handlesubmit}>
                <input type="text" className="form-control" placeholder="Enter productname" onChange={(e)=>setProductName(e.target.value)} /><br />
                <textarea className="form-control " placeholder="Enter product description" onChange={(e)=>setProductDescription(e.target.value)}></textarea><br />
                <input type="number" className="form-control" placeholder="Enter product cost " onChange={(e)=>setProductCost(e.target.value)}/><br />
                <input type="file" accept="image/*" className="form-control" placeholder="No file chosen" onChange={(e)=>setProductPhoto(e.target.files[0])} /><br />
                <button type="submit"className="btn btn-primary w-100">Add product</button>
            </form>
        </div>
        </div>
        </div>
    )
}
export default Addproduct