import React ,{useEffect, useState}from 'react'
import { Link } from 'react-router-dom';

 const AddProduct = () => {
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[age,setAge]=useState("")
    const[phonenumber,setPhonenumber]=useState("")
    const[gender,setGender]=useState("")
    const[spec,setSpec]=useState("")
    const[address,setAddress]=useState("")
    const[category,setCategory]=useState("")
    const[city,setCity]=useState("")
    const[state,setState]=useState("")
    const[pincode,setPincode]=useState("")
    const[desc,setDesc]=useState("")
    const[error,setError]=useState(false)

    const addProduct=async()=>{
        console.log(name,email,age,phonenumber,gender,spec,address,category,city,state,pincode,desc)
        if(!name|| !email|| !age|| !phonenumber|| !gender|| !spec|| !address|| !category|| !city|| !state|| !pincode || !desc)
        {
            setError(true)
            return false;
        }
        const userId=JSON.parse(localStorage.getItem('user'))._id
        let result=await fetch('https://studentdashboard-new-2.onrender.com/personal-details',{
            method:"post",
            body:JSON.stringify({name,email,age,phonenumber,gender,spec,address,category,city,state,pincode,desc,userId}),
            headers:{
                'Content-Type':'application/json',
                //authorization:`Bearer ${JSON.parse(localStorage.getItem('token'))}`
            },  
        });
        result=await result.json()
        console.warn(result)
      
        
    }
                

    return (
    <div className="container">


        <h1 className='text-white pb-4'> Add Personal Details</h1><br></br>
      <form  className="form">
        <input type="text" placeholder="Name" name="Name"  className='text-white'
         value={name} onChange={(e)=>{setName(e.target.value)}} required />
        {error && !name && <span class='invalid-input'>Enter valid name</span>}

        <input type="text" placeholder="Email" name="Email" className='text-white'
        value={email} onChange={(e)=>{setEmail(e.target.value)}}required />

        {error && !email && <span class='invalid-input'>Enter valid Email</span>}

        <input type="text" placeholder="Age" name="Age" className='text-white'
        value={age} onChange={(e)=>{setAge(e.target.value)}}required />

        {error && !age && <span class='invalid-input'>Enter Age</span>}


        <input type="number" placeholder="Phone Number" name="Phone Number" 
        value={phonenumber} onChange={(e)=>{setPhonenumber(e.target.value)}}required />

       {error && !phonenumber && <span class='invalid-input'>Enter Phone Number</span>}

        <select name="cat" id="cat" className='text-white' 
        value={gender} onChange={(e)=>{setGender(e.target.value)}}>
         <option value="general" className='bg-black'>Choose Gender</option>
          <option value="Female" className='bg-black'>Female</option>
          <option value="Male" className='bg-black'>Male</option>
          <option value="others" className='bg-black'>others</option>
        </select>
        {error && !gender && <span class='invalid-input'>Enter Gender</span>}

        <input type="text" placeholder="Specification" name="Specification" 
        value={spec} onChange={(e)=>{setSpec(e.target.value)}}required />

       {error && !spec && <span class='invalid-input'>Enter Phone Number</span>}



        <textarea 
          required
          name="desc"
          id="desc"
          rows="2"
          placeholder="Address"
          value={address} onChange={(e)=>{setAddress(e.target.value)}}
        ></textarea>
        {error && !address && <span class='invalid-input'>Enter Address</span>}

        <select name="cat" id="cat" className='text-white'
        value={category} onChange={(e)=>{setCategory(e.target.value)}}>
          <option value="general" className='bg-black'>Choose a Category</option>
          <option value="Java developer" className='bg-black'>Java developer</option>
          <option value="Python developer"className='bg-black'>Python developer</option>
          <option value="Front-End Developer"className='bg-black'>Front-End Developer</option>
          <option value="Back-End Developer"className='bg-black'>Back-End Developer</option>
          <option value="Full stack Developer"className='bg-black'>Full stack Developer</option>
        </select>
        {error && !category && <span class='invalid-input'>Enter Category</span>}
        
        <input type="text" placeholder="City" name="City" 
         value={city} onChange={(e)=>{setCity(e.target.value)}} required/>
        {error && !city && <span class='invalid-input'>Enter City</span>}

        <input type="text" placeholder="State" name="State" 
        value={state} onChange={(e)=>{setState(e.target.value)}} required/>
        {error && !state && <span class='invalid-input'>Enter State</span>}

        <input type="number" placeholder="Pincode" name="Pincode" 
        value={pincode} onChange={(e)=>{setPincode(e.target.value)}} required/>
        {error && !pincode && <span class='invalid-input'>Enter Pincode</span>}

        <textarea
          required
          name="desc"
          id="desc"
          rows="4"
          placeholder="Description"
          className='text-white'
          value={desc} onChange={(e)=>{setDesc(e.target.value)}} 
        ></textarea>
        {error && !desc && <span class='invalid-input'>Enter Description</span>}

        {/* <button  onClick={addProduct} type="submit">Submit</button> */}
       
        <div>
        <button onClick={addProduct} className='text-center buttonstyle1'>
          <Link to={'/personaldetails/'} style={{textDecoration: 'none' }}>Submit</Link>
          </button>
        </div>
      </form>
    </div>
  );
};


export default AddProduct
