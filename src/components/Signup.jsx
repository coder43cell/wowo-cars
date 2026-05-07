import axios from "axios"
import React,{useState} from "react"
import { Link } from "react-router-dom"
const Signup=()=>{
  // declare our states here 
  const[username,setUsername]=useState(" ")
  const[email,setEmail]=useState("")
  const[phone,setPhone]=useState("")
  const[password,setPassword]=useState("")
  const[loading,setLoading]=useState("")
  const[success,setSuccess]=useState("")
  const[error,setError]=useState("")
  const[strength,setStrength]=useState("")

  // function to handle submit 
  const handlesubmit=async (e)=>{
    e.preventDefault()
    setLoading("Please wait....")

    // create empty digital envelope to store user inputs 
    const formdata=new FormData()
    // append/add 
    formdata.append("username",username)
    formdata.append("email",email)
    formdata.append("phone",phone)
    formdata.append("password",password)
    try {
      const response= await axios.post("https://higgs.alwaysdata.net/api/signup",formdata)
      setSuccess(response.data.message)
      setLoading("")
    } catch (error) {
       setError(error.message)
            setLoading("")
      
    }

  }
   const checkPasswordStrength=(password)=>{
        if(password.length<4){
            setStrength("weak");
        }
        else  if(password.length<8){
            setStrength("medium");
        }
        else{
            setStrength("Strong");
        }
    };

    return(
      <div className="signup-container">
      <div className="row mt-4  justify-content-center">
        <div className="col-md-6   p-4 text-center">
          <h1 className="text-warning">Sign up</h1>
          {/* bind the states  */}
          <h2 className="text-warning">{loading}</h2>
          <h2 className="text-success">{success}</h2>
          <h2 className="text-danger">{error}</h2>

          <form action="" onSubmit={handlesubmit}>
              <input type="text" className="form-control" placeholder="Enter username " onChange={(e)=>setUsername(e.target.value)}/><br />
              <input type="text" className="form-control" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/><br />
                <input type="password" className="form-control" placeholder="password" onChange={(e)=>{setPassword(e.target.value);
                  checkPasswordStrength(e.target.value);
                }}/> 
                <br />
                {password&&(
                  <p
                  style={{
                    color: 
                    strength ==="weak"
                    ? "red"
                    : strength ==="medium"
                    ? "orange"
                    :"green",
                  }}
                  >
                    password Strength:{strength}

                  </p>
                
                )}
                <input type="number" className="form-control" placeholder="Enter phone"
                onChange={(e)=>setPhone(e.target.value)} /><br />
                <button type="submit"className="btn btn-primary w-100">sign up</button><br/><br />
               <p className="text-white">Already have an account?<Link to="/signin">sign in</Link></p> 

            </form>
        </div>

      </div>
      </div>
    )

}
export default Signup