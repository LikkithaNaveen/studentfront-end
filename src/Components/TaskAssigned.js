import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Input } from "@material-tailwind/react";




const TaskAssigned = () => {

  const [name, setName] = useState("")
  const [course, setCourse] = useState("")
  const [language, setLanguage] = useState("")
  const [taskdetails, settaskdetails] = useState("")
  const [assigndate, setAssigndate] = useState("")
  const [completedate, setCompletedate] = useState("")
  const [desc, setDesc] = useState("")
  const [error, setError] = useState(false)
  const navigate = useNavigate();
  const [products, setProducts] = useState([])
  const [taskassign, setTaskassign] = useState([])


  const auth = localStorage.getItem('user')



  useEffect(() => {
    getProducts();
    gettaskdetails();
  }, [])

  const getProducts = async () => {
    let result = await fetch('https://studentdashboard-new-2.onrender.com/personal-details')
    // {
    //     headers:{
    //                 authorization:`Bearer ${JSON.parse(localStorage.getItem('token'))}`
    //             }
    // })

    result = await result.json()
    setProducts(result)
  }


  const gettaskdetails = async () => {
    let result = await fetch('https://studentdashboard-new-2.onrender.com/addTask-details')
    // {
    //     headers:{
    //                 authorization:`Bearer ${JSON.parse(localStorage.getItem('token'))}`
    //             }
    // })

    result = await result.json()
    setTaskassign(result)
  }
  //console.warn("products",products)

  const deletedetails = async (id) => {
    let result = await fetch(`https://studentdashboard-new-2.onrender.com/personal-details/${id}`, {
      method: "Delete"

    });
    result = await result.json()
    if (result) {
      getProducts()
    }

  }

  const productdelete = async (id) => {
    let result = await fetch(`https://studentdashboard-new-2.onrender.com/addTask-details/${id}`, {
      method: "Delete"

    });
    result = await result.json()
    if (result) {
      gettaskdetails()
    }

  }


  const searchhandle = async (event) => {
    let key = event.target.value;
    if (key) {
      let result = await fetch(`https://studentdashboard-new-2.onrender.com/search/${key}`, {
        headers: {
          authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
      });
      result = await result.json()
      if (result) {
        setProducts(result)
      }
      else {
        getProducts()
      }


    }
  }

  const searchtaskdetails = async (event) => {
    let key = event.target.value;
    if (key) {
      let result = await fetch(`https://studentdashboard-new-2.onrender.com/searchtask/${key}`)
      //     headers:{
      //                 authorization:`Bearer ${JSON.parse(localStorage.getItem('token'))}`
      //             }
      // });
      result = await result.json()
      if (result) {
        setTaskassign(result)
      }
      else {
        gettaskdetails()
      }


    }
  }

  const taskproduct = async () => {

    const userId = JSON.parse(localStorage.getItem('user'))._id
    let result = await fetch('https://studentdashboard-new-2.onrender.com/addTask-details', {
      method: "post",
      body: JSON.stringify({ name, course, language, assigndate, completedate, desc, userId }),
      headers: {
        'Content-Type': 'application/json'
        //authorization:`Bearer ${JSON.parse(localStorage.getItem('token'))}`
      },
    });
    result = await result.json()
    console.warn(result)


  }


  return (

    <div class="totalpage">
      <div>
      <h1 class='headingtaskass'>Task Assigned Details </h1><br></br>
        <form class="fullpadetask" >

          <div class="bodyoftask">
            <div class='inputbox'>
              <input type='text' required="required"
                value={name} onChange={(e) => {setName(e.target.value) }} />
              <span>Student Name</span>
            </div>
            <div class='inputbox'>
              <select type='text'
                value={course} onChange={(e) => { setCourse(e.target.value) }}
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
                value={language} onChange={(e) => { setLanguage(e.target.value) }}
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
              <input type="date"  min="01-01-1800" max="08-04-5000" placeholder='Start Time' 
              className='text-white'
              value={assigndate} onChange={(e) => { setAssigndate(e.target.value) }} />

              <span>Assign Date</span>
            </div>
            <div class='inputbox'>
              <input type="date"  min="01-01-1800" max="08-04-5000" placeholder='End Time'
                value={completedate} onChange={(e) => { setCompletedate(e.target.value) }} />

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

            <button type="submit" className='text-center buttonstyle' onClick={taskproduct}><Link  class='buttonlink' to={'/'}>Submit</Link></button>

          </div><br></br><br></br><br></br><br></br><br></br>
        </form>
      </div><br></br><br></br><br></br><br></br>

      <div class="wrap">
    <div class="search">
        <input type="text" class="searchTerm" placeholder="What are you looking for?" 
        onChange={searchtaskdetails}/><br></br>
        <button type="submit" class="searchButton"  > 
            <i class="fa fa-search"></i>
        </button>
    </div>
    </div>
      <div class='tablebody'>
        <div class="tablecontainer">
          <table>
            <thead>
              <tr>
                <th>S.no</th>
                <th>Student Name</th>
                <th>Task Details</th>
                <th>Language</th>
                <th>Assigned Date</th>
                <th>Completed Date</th>
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
                    <td>{item.completedate}</td>
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
      </div>



      {/* <label class="taskadd">Name</label><br></br>
        <input type="text" placeholder="Name" name="Name"  class="taskinput"
         value={name} onChange={(e)=>{setName(e.target.value)}} 
         required />
        {error && !name && <span class='invalid-input'>Enter valid name</span>}<br></br>


        <label class="taskadd">Course </label><br></br>
        <select name="cat" id="cat" class="taskinputdropdown"
        value={course} onChange={(e)=>{setCourse(e.target.value)}}
        >
          <option value="general">Choose a Course</option>
          <option value="Java developer">Java developer</option>
          <option value="Python developer">Python developer</option>
          <option value="Front-End Developer">Front-End Developer</option>
          <option value="Back-End Developer">Back-End Developer</option>
          <option value="Full stack Developer">Full stack Developer</option>
        </select>
        {error && !course && <span class='invalid-input'>Enter Course</span>}<br></br>


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

        <label class="taskadd">Task Details </label><br></br>
        <textarea 
          required
          name="desc"
          rows="3"
          placeholder="Task Details" class="taskinput"
          value={taskdetails} onChange={(e)=>{settaskdetails(e.target.value)}}
        ></textarea><br></br>
        {error && !taskdetails && <span class='invalid-input'>Enter Details</span>} 
        


            <label class="taskadd">Start Date</label><br></br>
            <input type="date" name="party" min="1990-01-01"  class="datepicker" max="5000-04-30" placeholder='Start Time'
            value={assigndate} onChange={(e)=>{setAssigndate(e.target.value)}}/>
            {error && !assigndate && <span class='invalid-input'> StartDate</span>} 
            <label class="taskadd">End Date</label><br></br>
            <input type="date" name="party" min="1990-01-01"  class="datepicker" max="5000-04-30" placeholder='End Time'
            value={completedate} onChange={(e)=>{setCompletedate(e.target.value)}}/>
            {error && !completedate && <span class='invalid-input'>ToDate</span>} 

        <label class="taskadd">Description </label><br></br>
        <textarea 
          required
          name="desc"
          rows="3"
          placeholder="Description" class="taskinput"
          value={desc} onChange={(e)=>{setDesc(e.target.value)}}
        ></textarea><br></br>
        {error && !desc && <span class='invalid-input'>Enter Description</span>}
  
         <button   type="submit" class="tasksubmit" onClick={taskproduct}>Submit</button> */}


    </div>
  );
};



export default TaskAssigned
