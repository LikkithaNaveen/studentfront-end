import React ,{useState,useEffect}from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import DatePicker from "react-datepicker";


 const Taskupdate = () => {
    const[name,setName]=useState("")
    const[course,setCourse]=useState("")
    const[language,setLanguage]=useState("")
    const[assigndate,setAssigndate]=useState("")
    const[completedate,setCompletedate]=useState("")
    const[desc,setDesc]=useState("")
    const params=useParams()
    const navigate=useNavigate()

    useEffect(()=>{
        getTaskdetails()
    },[])

    const getTaskdetails=async()=>{
      let result=await fetch(`https://studentdashboard-new-2.onrender.com/addTask-details/${params.id}`,{
        headers:{
                    authorization:`Bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
    });
      result=await result.json();
      console.warn(result)
      setName(result.name)
      setCourse(result.course)
      setLanguage(result.language)
      setAssigndate(result.assigndate)
      setCompletedate(result.completedate)
      setDesc(result.desc)

      

    }
                

    const Updatetask=async()=>{
      //console.log(name,course,language,taskdetails,assigndate,completedate,desc)
      let result=await fetch(`https://studentdashboard-new-2.onrender.com/addTask-details/${params.id}`,{
        method:"Put",
        body:JSON.stringify({name,course,language,assigndate,completedate,desc}),
        headers:{
            'Content-Type':'application/json'
            //authorization:`Bearer ${JSON.parse(localStorage.getItem('token'))}`
        },
    });
    result=await result.json()
    console.warn(result)
    navigate("/taskassign/")
    
}
    

    return (
      <div>
      
   
      <h1 class='headingtaskass'>Update Task Assigned </h1><br></br>
      <form  class="fullpadetask" >
      
          <div class="bodyoftask">
            <div class='inputbox'>
                <input type='text' required="required" 
                 value={name} onChange={(e)=>{setName(e.target.value)}}/>
                <span>Student Name</span>  
            </div>
            <div class='inputbox'>
                <select type='text' 
                value={course} onChange={(e)=>{setCourse(e.target.value)}}
                required="required">
                     <option value="general">Choose a Course</option>
                <option value="JavaScript - Day -1: Introduction to Browser & web">JS:Introduction to Browser & web</option>
                <option value="JavaScript - Day -2: Datatypes">JS:Datatypes</option>
                <option value="JavaScript - Day -3: JS array & objects">JS:JS array & objects</option>
                <option value="JavaScript - Day -4: Functions">Js: Functions</option>
                <option value="JavaScript - Day -6: OOP in JS">JS: OOP in JS</option>
                <option value="JavaScript - Day -7: Array methods">JS: Array methods</option>
                <option value="HTML">HTML</option>
                <option value=" HTML & CSS"> HTML & CSS</option>
                <option value="DOM">DOM</option>
                <option value="Document vs Window">Document vs Window</option>
                <option value=" Recap of Topics"> Recap of Topics</option>
                <option value="Async programming- Day -1: Callback">Async programming: Callback</option>
                <option value="Async programming- Day -2: Promise">Async programming: Promise</option>
                <option value="Async programming- Day -3:  Promise & async-await">Async programming:  Promise & async-await</option>
                <option value="Async programming- Day -4: Promise fetch - request">Async programming: Promise fetch - request</option>
                <option value="Async programming- Day -5: Recap of topics">Async programming: Recap of topics</option>
                <option value="React- Day -1: ES5 vs ES6">React: ES5 vs ES6</option>
                <option value="React- Day -2: React">React</option>
                <option value="React hooks & states">React hooks & states</option>
                <option value="React components">React components</option>
                <option value="React Hooks">React Hooks</option>
                <option value="Router">Router</option>
                <option value="Context API">Context API</option>
                <option value="useRef & useReducer">useRef & useReducer</option>
                <option value="Axios">Axios</option>
                  </select>
                <span>Task details</span>
               
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
            <input type="date" name="party" min="01-01-1800" max="08-04-5000" placeholder='Start Time' className='text-white'
            value={assigndate} onChange={(e)=>{setAssigndate(e.target.value)}}/>

                <span>Assign Date</span>  
            </div>
            <div class='inputbox'>
            <input type="date" name="party" min="01-01-1800" max="08-04-5000" placeholder='End Time'
            value={completedate} onChange={(e)=>{setCompletedate(e.target.value)}}/>

                <span>Completed Date</span>
            </div>
            <div class='inputbox'>
                <input type='text' required="required"
                 value={desc} onChange={(e)=>{setDesc(e.target.value)}}
       />
                <span>Description</span>
            </div>
          </div>
          <div>
            <br></br>
            
      <button type="submit" className='text-center buttonstyle' onClick={Updatetask}><Link to={'/taskassign/'}>Update</Link></button>
</div><br></br><br></br><br></br><br></br>

                   
                    
                    </form>
    </div>
  );
};

export default Taskupdate
