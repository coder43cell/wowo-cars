import React,{useState} from "react"
import { useLocation} from "react-router-dom"
import axios from "axios"
const Mpesapayment=()=>{
    const {singleproduct}=useLocation().state || {}
    const imagepath="http://adrianhiggs.alwaysdata.net/static/images/"
    // declare your states here
    const[success,setSuccess]=useState("")
    const[loading,setLoading]=useState("")
    const[error,setError]=useState("")
    const[phone,setPhone]=useState("")
    // function to make payment 
    const handlesubmit=async(e)=>{
        e.preventDefault()
        setLoading("please wait..")
        const formdata=new FormData()
        // append
        formdata.append("phone",phone)
        formdata.append("amount",singleproduct.product_cost)


        try{
            const response= await axios.post("http://adrianhiggs.alwaysdata.net/api/mpesa_payment",formdata)
            setSuccess(response.data.message)
            setLoading("")
        }
        catch(error){
            setError("something went wrong")
            setLoading("")

        }
    }

    return(
       <div className="row justify-content-center">
        <h1 className="text-success text-center">Make payment-Lipa na MPESA</h1>
        <div className="col-md-8 card shadow p-4" >
         <img src={imagepath+singleproduct.product_photo} alt="" style={{height:"250px",objectFit:"contain"}}/>


            <div className="card-body">
                <h1 className="text-info">{singleproduct.product_name}</h1>
               
                <p>{singleproduct.product_description}</p>
                <b className="text-warning">Ksh {singleproduct.product_cost}</b>

                   {/* bind the states  */}
          <h2 className="text-warning">{loading}</h2>
          <h2 className="text-success">{success}</h2>
          <h2 className="text-danger">{error}</h2>

               <form action="" onClick={handlesubmit}>
                <input type="number" className="form-control " placeholder="Enter phone 254XXXXXXXXX"
                onChange={(e)=>setPhone(e.target.value)}/>
                <br />
                <button type="submit"className="btn btn-outline-success w-100">Make payment</button>
               </form>
            </div>
        </div>
       </div>
    )
}
export default Mpesapayment