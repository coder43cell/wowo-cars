  import React,{useEffect,useState} from 'react'
  
  
  const Navbar = () => {
    const[user,setUser]=useState(null)

    useEffect(()=>{const loggedUser=JSON.parse(localStorage.getItem("user"))
        setUser(loggedUser)
    },[])
    const logout=()=>{
        localStorage.removeItem("user")
        setUser(null)
    }
    return (
      <section class="row ">
            <div class="col-md-12 ">
                {/* <!-- a nav whith navbar content  --> */}
                <nav class="navbar navbar-expand-md bg-black">
                    <a href="/" class="navbar-brand text-warning ">
                        <img src="images/Gemini.png "
                            alt="logo" width="30" height="30" class="d-inline-block align-text-top"/>AutoVibe</a>
                    <button class="navbar-toggler" data-bs-target="#navbarcollapse" data-bs-toggle="collapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    {/* <!-- a division containing links --> */}
                    <div class="collapse navbar-collapse " id="navbarcollapse">
                        <div class="navbar-nav ">
                            <a href="/" class="nav-link active text-white">home</a>
                            <a href="/addproduct" class="nav-link text-white">Add product</a>
                            {user?(
                                <>
                                <span className="nav-link ">Welcome {user.username}</span>
                                <button onClick={logout} className="btn btn-danger">
                                    logout
                                </button>
                                </>
                            ):(
                                <>
                            <a href="/signin" class="nav-link text-white" >signin</a>
                              <a href="/signup" class="nav-link text-white"> signup</a>
                              </>
                            )}

                        </div>
                    </div>
                </nav>
            </div>
        </section>
    )
  }
  
  export default Navbar