import React ,{ useState,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MdAttachEmail } from "react-icons/md";
const Login = () => {
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const navigate=useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
  };
  useEffect(()=>{
    const auth=localStorage.getItem('user')
    if(auth)
    {
        navigate('/')
    }

},[])

  const handlelogin=async()=>{
    console.warn(email,password)
    let result=await fetch('https://studentdashboard-new-2.onrender.com/login',{
      method:"post",
      body:JSON.stringify({email,password}),
      headers:{
          'Content-Type':'application/json',
           authorization:`Bearer ${JSON.parse(localStorage.getItem('token'))}`
      }
                  
  });
  result=await result.json()
  console.warn(result)
  if(result.auth)
  {
    localStorage.setItem("user",JSON.stringify(result.user))
    localStorage.setItem("token",JSON.stringify(result.auth))
    navigate('/')
  }
  else{
    alert("Please enter valid details")
  }
  }

  return (
    <div>
       {/* <h1 class='signinh1'>login</h1>

       <label class='signuplabel'><b>Email</b></label>
            <input class='signupbox' type="text" 
            value={email} onChange={(e)=>setEmail(e.target.value)}
            placeholder="Enter Email" required/>


            <label class='signuplabel'><b> Password</b></label>
            <input class='signupbox' type="password" 
             value={password} onChange={(e)=>setPassword(e.target.value)}
            placeholder="Enter Password"  requireid/>



<br></br>
            <div>
            <button onClick={handlelogin} type="submit" class="signupbtn">Login</button>
            </div> */}
            <br></br>
    <div className="bg-cover font-sans bg-no-repeat relative z-0 bg-center h-screen ">
    <div className="absolute top-0 left-0 w-full h-screen bg-black opacity-50 z-20"></div>
      <div className="flex items-center justify-center h-screen">
        <div className="p-8 text-white bg-transparent border-slate-300 rounded-lg shadow-lg w-96">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold text-center p-3">LOGIN</h1>
            <div className="flex flex-col mt-7 text-center">
              <label className="mb-1 text-xl font-semibold text-left">Email</label><br></br>  
              <input className="px-4 py-1 text-white bg-transparent border border-white focus:outline-none focus:ring-0 focus:border-white" 
               type="email" placeholder="Enter Email" 
              value={email} onChange={(e)=>setEmail(e.target.value)}
             required/>
            </div><br></br>
            <div className="flex flex-col mt-7 text-center">
              <label className="mb-1 text-xl font-semibold text-left">Password</label><br></br>
              <input className="px-4 py-1 text-white bg-transparent border border-white focus:outline-none focus:ring-0 focus:border-white" 
              type="password" placeholder="Enter password" 
              value={password} onChange={(e)=>setPassword(e.target.value)} required/>
            </div>
            
            
            <div className="flex justify-between w-full mt-4 text-sm text-center">
              <div className="flex flex-col mt-2 ">
                <label className="text-left p-2">New Register</label>  
                <a href="http://localhost:3000/signup" className="text-blue-500">Sign Up</a>
              </div>
              <button onClick={handlelogin} class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                <span class="relative p-3 py-4 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Login
                </span>
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>

    

  )
}

export default Login