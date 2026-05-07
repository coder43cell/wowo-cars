import React from 'react'

const Footer = () => {
  return (
    <div>  
       <section class="row p-4">
         {/* <!-- child 1 --> */}
         <div class="col-md-4">
            <h2 class="text-center text-white">About us</h2>
            <p class="text-white text-center">At AutoVibe, we don’t just sell cars—we help you step into the life you’ve worked for.

We know that a luxury car is never just about getting from one place to another. It’s about how it makes you feel when you turn the key. It’s the confidence, the presence, and the quiet reminder that you’ve earned something special.

That’s why we carefully choose every vehicle we offer. Each car is handpicked for its quality, performance, and elegance—because you deserve nothing less than excellence.
            </p>

         </div>
         {/* <!-- child2 --> */}
         <div class="col-md-4 text-center text-white">
            <h2>Contact</h2>
            <form action="">
               <input type="email" placeholder="Enter your email" class="form-control"/><br/><br/>
               <textarea name="" id="" class="form-control" placeholder="leave comment"></textarea><br/>
               <input type="submit" value="send message" class="btn btn-outline-danger "/>
            </form>

         </div>
         {/* <!-- child 3 --> */}
         <div class="col-md-4">
            <h2 class="text-center text-white">Stay connected</h2>
            <a href="https://facebook.com">
               <img src="images/fb.png" alt="facebook"/>

            </a>
            <a href="https://instagram.com"><img src="images/in.png" alt="instagram"/>
            </a>
            <a href="https://X.com">
               <img src="images/x.png" alt="X"/>
            </a>
            <p class="text-white">You may find us on this platforms and welcomed to contact us.</p>

         </div>


      </section>
      </div>
  )
}

export default Footer