import React ,{useEffect, useState}from 'react'
import "bootstrap/dist/css/bootstrap.css"; 
import Capstoneproduct from './Capstoneproduct'
import { Link } from 'react-router-dom';

const AddCapstone = () => {
    const[id,setId]=useState("")
    const[name,setName]=useState("")
    const[capstonetitle,setCapstonetitle]=useState("")
    const[language,setLanguage]=useState("")
    const[status,setStatus]=useState("")
    const[desc,setDesc]=useState("")
    const[error,setError]=useState(false)
    

    const addcapstonedetails=async()=>{
        console.warn(id,name,capstonetitle,language,status,desc)

        // if(!id||!name|| !capstonetitle|| !language|| !status|| !desc)
        // {
        //     setError(true)
        //     return false;
        // }
       
        const userId=JSON.parse(localStorage.getItem('user'))._id
        let result=await fetch('https://studentdashboard-new-2.onrender.com/capstone-details',{
            method:"post",
            body:JSON.stringify({id,name,capstonetitle,language,status,desc,userId}),
            headers:{
                'Content-Type':'application/json'
                //authorization:`Bearer ${JSON.parse(localStorage.getItem('token'))}`
            },  
        });
        result=await result.json()
        console.warn(result)
      
        
    }
 
                

    return (


      <div>
      <div>


        <h1 class='headingtaskass'>Capstone Details </h1><br></br>
        <form class="fullpadetask" >

          <div class="bodyoftask">
            <div class='inputbox'>
              <input type='text' required="required"
                value={id} onChange={(e) => {setId(e.target.value) }} />
              <span>Student Id</span>
            </div>

            <div class='inputbox'>
              <input type='text' required="required"
                 value={name} onChange={(e)=>{setName(e.target.value)}}  />
              <span>Student Name</span>
            </div>

            <div class='inputbox'>
              <input type='text' required="required"
                value={capstonetitle} onChange={(e)=>{setCapstonetitle(e.target.value)}} 
                />
              <span>Capstone Title</span>
            </div>

            <div class='inputbox'>
              <select type='text'
               value={language} onChange={(e)=>{setLanguage(e.target.value)}}
              >
                <option value="general">Choose a Language</option>
                <option value="Java">Java</option>
                <option value="Python ">Python</option>
                <option value=".Net">.Net</option>
                <option value="C/C++">C/C++</option>
                <option value="HTML/CSS">HTML/CSS</option>
                <option value="React Js">React Js</option>
                <option value="Node Js">Node Js</option>
              </select>
              <span>Language</span>

            </div>


            <div class='inputbox'>
              <select type='text'
               value={status} onChange={(e)=>{setStatus(e.target.value)}}>
                <option value="general">Choose a Status</option>
                <option value="Pending">Pending</option>
                <option value="Completed ">Completed</option>
              </select>
              <span>Language</span>
           </div>

            <div class='inputbox'>
              <input type='text' required="required"
                value={desc} onChange={(e) => { setDesc(e.target.value) }}
              />
              <span>Description</span>
            </div>
          </div>
          <div>
            <br></br>

            <button type="submit" className='text-center buttonstyle' onClick={addcapstonedetails}><Link  class='buttonlink' to={'/'}>Submit</Link></button>

          </div><br></br><br></br><br></br><br></br><br></br>
        </form>
      </div>
      {/* <div class='tablebody'>
        <div class="tablecontainer">
          <table>
            <thead>
              <tr>
                <th>  S.no </th>
                <th>Student Name</th>
                <th>Task Details</th>
                <th>Language</th>
                <th>Assigned Date</th>
                <th>Description</th>
                <th>Operation</th>
              </tr>
            </thead>
            {
              taskassign.length > 0 ? taskassign.map((item, index) =>
                <tbody>
                  <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.course}</td>
                    <td>{item.language}</td>
                    <td>{item.assigndate}</td>
                    <td>{item.desc}</td>
                    <td><button class='buttonstyledelupd' type="submit" onClick={() => productdelete(item._id)}>Delete</button>
                      <button class='buttonstyledelupd'><Link style={{ textDecoration: 'none', color: 'white' }}
                        to={"/updatetask/" + item._id}>Update</Link></button></td>
                  </tr>

                </tbody>
              ) : <tbody>No Result Found</tbody>
            }
          </table>
        </div> 
      </div>*/}
       
      
      {/* <label class="taskadd">Name</label><br></br>
    <div className="container">
        <h1 class='headingtaskass'> Capstone Details </h1>
      <form  className="form">
        <label class="taskadd">Student Id</label><br></br>
        <input type="text" placeholder="ID" name="id"  class="taskinput"
         value={id} onChange={(e)=>{setId(e.target.value)}} 
         required />
        {error && !id && <span class='invalid-input'>Enter valid name</span>}<br></br><br></br>

        <label class="taskadd">Name</label><br></br>
        <input type="text" placeholder="Name" name="Name"  class="taskinput"
         value={name} onChange={(e)=>{setName(e.target.value)}} 
         required />
        {error && !name && <span class='invalid-input'>Enter valid name</span>}<br></br><br></br>

        <label class="taskadd">Capstone Title</label><br></br>
        <input type="text" placeholder="Name" name="Name"  class="taskinput"
         value={capstonetitle} onChange={(e)=>{setCapstonetitle(e.target.value)}} 
         required />
        {error && !capstonetitle && <span class='invalid-input'>Enter valid name</span>}<br></br>
        

        <label class="taskadd">Language </label><br></br>
        <select name="cat" id="cat" class="taskinputdropdown"
        value={language} onChange={(e)=>{setLanguage(e.target.value)}}
        >
          <option value="general">Choose a Language</option>
          <option value="Java">Java</option>
          <option value="Python ">Python</option>
          <option value=".Net">.Net</option>
          <option value="C/C++">C/C++</option>
          <option value="HTML/CSS">HTML/CSS</option>
          <option value="React Js">React Js</option>
          <option value="Node Js">Node Js</option>
        </select>
        {error && !language && <span class='invalid-input'>Enter Language</span>}<br></br>

        <label class="taskadd">Status </label><br></br>
        <select name="cat" id="cat" class="taskinputdropdown"
        value={status} onChange={(e)=>{setStatus(e.target.value)}}
        >
          <option value="general">Choose a Status</option>
          <option value="Pending">Pending</option>
          <option value="Competed ">Competed</option>
        </select>
        {error && !status && <span class='invalid-input'>Enter Status</span>}<br></br>

        

        <label class="taskadd">Description </label><br></br>
        <textarea 
          required
          name="desc"
          rows="3"
          placeholder="Description" class="taskinput"
          value={desc} onChange={(e)=>{setDesc(e.target.value)}}
        ></textarea><br></br>
        {error && !desc && <span class='invalid-input'>Enter Description</span>}
  
         <button   type="submit" class="tasksubmit" onClick={addcapstonedetails}>Submit</button>
      </form>
      */}

      <Capstoneproduct/>

      
      </div>
  );
};



export default AddCapstone
