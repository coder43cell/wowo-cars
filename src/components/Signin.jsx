import React,{useState} from "react"
import { Link,useNavigate} from "react-router-dom"
import axios from "axios"
const Signin=()=>{
    let navigate = useNavigate()
    // declare the two states here 
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    // 3 states for posting data 
    const[loading,setLoading]=useState("")
    const[success,setSuccess]=useState("")
    const[error,setError]=useState("")
    // function to handle submit 
    const handlesubmit=async(e)=>{
        e.preventDefault()
        setLoading("please wait...")
        // create empty digital envelope to store user inputs 
        const formdata=new FormData()
        // append/add
        formdata.append("email",email)
        formdata.append("password",password)
        try{
            const response=await axios.post("http://higgs.alwaysdata.net/api/signin",formdata)
            setSuccess(response.data.message)
            setLoading("")
            // if login/signin is successful we save user to localstorage 
            // NB: redirect user to homepage(getproducts) 
            if(response.data.user){
                // login success 
                localStorage.setItem("user",JSON.stringify(response.data.user))
            
           
            // redirect user to homepage 
            navigate("/") }
            else{
                // login failed 
                setSuccess(response.data.message)
            }
        }
        catch(error){

        }
       
    }
    return(
       <div className="row mt-4 justify-content-center">
        <div className="col-md-6 card shadow p-4">
           <form action="" onSubmit={handlesubmit}>
            <h1 className="text-center">Sign in</h1>
             {/* bind the states  */}
          <h2 className="text-warning">{loading}</h2>
          <h2 className="text-success">{success}</h2>
          <h2 className="text-danger">{error}</h2>

          
            <input type="text" className="form-control" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/><br />
            <input type="text" className="form-control" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)}/><br />
            <button type="submit" className="btn btn-primary w-100">Sign in</button><br />
            <p>Don't have an account?<Link to="/signup">Sign up</Link></p>
            </form>
        </div>
       </div>
    )
}

export default Signin