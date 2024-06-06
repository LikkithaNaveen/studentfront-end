import React ,{useState,useEffect}from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';


 const QueriesUpdate = () => {
    const[name,setName]=useState("")
    const[topiccategory,setTopicategory]=useState("")
    const[language,setLanguage]=useState("")
    const[title,setTitle]=useState("")
    const[querydesc,setQuerydesc]=useState("")
    const[timings,setTimings]=useState("")
    const params=useParams()
    const navigate=useNavigate()

    useEffect(()=>{
        getQueriesdetails()
    },[])

    const getQueriesdetails=async()=>{
      let result=await fetch(`https://studentdashboard-new-2.onrender.com/Queries-details/${params.id}`,{
        headers:{
                    authorization:`Bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
    });
      result=await result.json();
      console.warn(result)
      setName(result.name)
      setTopicategory(result.topiccategory)
      setLanguage(result.language)
      setTitle(result.title)
      setQuerydesc(result.querydesc)
      setTimings(result.timings)

      

    }
                

    const UpdateQueries=async()=>{
      //console.log(name,course,language,taskdetails,assigndate,completedate,desc)
      let result=await fetch(`https://studentdashboard-new-2.onrender.com/Queries-details/${params.id}`,{
        method:"Put",
        body:JSON.stringify({name,topiccategory,language,title,querydesc,timings}),
        headers:{
            'Content-Type':'application/json'
            //authorization:`Bearer ${JSON.parse(localStorage.getItem('token'))}`
        },
    });
    result=await result.json()
    console.warn(result)
    navigate('/addqueries/')
    
}
    

    return (
        <div>
        <h1 class='headingtaskass'>Update Queries</h1><br></br>

        <form class="fullpadetask" >

          <div class="bodyoftask">
            <div class='inputbox'>
              <input type='text' required="required"
                value={name} onChange={(e) => {setName(e.target.value) }} />
              <span>Student Name</span>
            </div>

            
            <div class='inputbox'>
              <select type='text'
              value={topiccategory} onChange={(e)=>{setTopicategory(e.target.value)}}
              >
              <option value="general">Choose a Language</option>
                    <option value="Java">Zen-Class-Doubt</option>
                    <option value="Python ">Placement-Related</option>
                    <option value=".Net">Cordination Related</option>
                    <option value="C/C++">Pre-Bootcamp-related</option>
                    </select>
              <span>Topic Category </span>

            </div>


            <div class='inputbox'>
              <select type='text'
              value={language} onChange={(e)=>{setLanguage(e.target.value)}}>
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
              <input type='text' required="required"
                value={title} onChange={(e) => {setTitle(e.target.value) }}
              />
              <span>Query title</span>
            </div>

            <div class='inputbox'>
              <input type='text' required="required"
                value={querydesc} onChange={(e) => {setQuerydesc(e.target.value) }}
              />
              <span>Query Description</span>
            </div>

            <div class='inputbox'>
                <input type='time'  placeholder='Time' className='text-white'
                value={timings} onChange={(e) => {setTimings(e.target.value) }} />
                <span>Timings</span>
            </div>
          </div>
          <div>
            <br></br>

            <button type="submit" className='text-center buttonstyle' onClick={UpdateQueries}><Link class='buttonlink' to='/addqueries/'> Update</Link></button>

          </div><br></br><br></br><br></br><br></br><br></br>
          </form>
      {/* <form  className="form">
        <label class="taskadd">Name</label><br></br>
        <input type="text" placeholder="Name" name="Name"  class="taskinput"
         value={name} onChange={(e)=>{setName(e.target.value)}} 
         required />
        <br></br><br></br>

        <label class="taskadd">Topic Category </label><br></br>
        <select name="cat" id="cat" class="taskinputdropdown"
        value={topiccategory} onChange={(e)=>{setTopicategory(e.target.value)}}
        >
          <option value="general">Choose a Language</option>
          <option value="Java">Zen-Class-Doubt</option>
          <option value="Python ">Placement-Related</option>
          <option value=".Net">Cordination Related</option>
          <option value="C/C++">Pre-Bootcamp-related</option>
        </select>
        <br></br>


        <label class="taskadd"> Topic Language </label><br></br>
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
        <br></br>

        <label class="taskadd">Query title</label><br></br>
        <input type="text" placeholder="title" name="Name"  class="taskinput"
         value={title} onChange={(e)=>{setTitle(e.target.value)}} 
         required />
        <br></br>
        

        <label class="taskadd">Query Description</label><br></br>
        <input type="text" placeholder="Description" name="Name"  class="taskinput"
         value={querydesc} onChange={(e)=>{setQuerydesc(e.target.value)}} 
         required /><br></br>
        
        <label class="taskadd">Timings</label><br></br>
        <input type="time" placeholder="time" name="time"  class="taskinput"
         value={timings} onChange={(e)=>{setTimings(e.target.value)}} 
         required />
       <br></br>
         <button   type="submit" class="tasksubmit" onClick={UpdateQueries}>Update</button>
      </form> */}

  

      
    </div>
  );
};


export default QueriesUpdate
