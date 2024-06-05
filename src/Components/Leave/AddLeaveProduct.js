import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const AddProductLeave = () => {
    const[addleave,setaddleave]=useState([])

    useEffect(()=>{
        getaddleave();
    },[])

    const getaddleave=async()=>{
        let result=await fetch('https://studentdashboard-new-2.onrender.com/Leave-Details',{
            headers:{
                        authorization:`Bearer ${JSON.parse(localStorage.getItem('token'))}`
                    }
        })
       
        result=await result.json()
        setaddleave(result)
    }
    

   


    const leavedelete=async (id)=>{
        let result=await fetch(`https://studentdashboard-new-2.onrender.com/Leave-Details/${id}`,{
            method:"Delete"

        });
        result=await result.json()
        if(result)
        {
            getaddleave()
        }

    }


    const searchleave=async(event)=>{
        let key=event.target.value;
        if(key){
            let result=await fetch(`https://studentdashboard-new-2.onrender.com/searchleave/${key}`)
            //     headers:{
            //                 authorization:`Bearer ${JSON.parse(localStorage.getItem('token'))}`
            //             }
            // });
            result=await result.json()
            if(result)
            {
                setaddleave(result)
            }
            else{
                getaddleave()
            }
            

        }
    }

  return (
    <div>

        <div class="wrap">
            <div class="search">
                <input type="text" class="searchTerm" placeholder="What are you looking for?" 
                onChange={searchleave}/>
                <button type="submit" class="searchButton"  > 
                    <i class="fa fa-search"></i>
                </button>
            </div>
            </div>
    
    {/* <i class="fa fa-search-plus"/><input  class='SearchProduct' type='text' placeholder='Search'
        onChange={searchleave}/> */}

            <div class='tablebody'>
                <div class="tablecontainer1">
                    <table>
                    <thead>
                        <tr>
                            <th> S.no </th>
                            <th>Batch Id</th>
                            <th>Student Name</th>
                            <th>Leave Taken</th>
                            <th>Description</th>
                            <th>Start Date</th>
                            <th>From Date</th>
                            <th>Operation</th>
                        </tr>
                        </thead>
                        {
                        addleave.length > 0 ? addleave.map((item, index) =>
                            <tbody>
                            <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>{item.batch}</td>
                                <td>{item.name}</td>
                                <td>{item.days}</td>
                                <td>{item.reason}</td>
                                <td>{item.fromdate}</td>
                                <td>{item.todate}</td>
                               
                               
                                <td><button class='buttonstyledelupd' type="submit" onClick={() => leavedelete(item._id)}>Delete</button>
                                </td>
                            </tr>

                            </tbody>
                        ) : <tbody>No Result Found</tbody>
                        }
                    </table>
                </div>
                </div>
{/*         
        {
            addleave.length>0 ? addleave.map((item,index)=>
            <ul key={item._id}>
                <li>{index+1}</li>
                <li>{item.name}</li>
                <li>{item.days}</li>
                <li>{item.fromdate}</li>
                <li>{item.todate}</li>
                <li>{item.reason}</li>
                <li><button onClick={()=>leavedelete(item._id)}>Delete</button>
                </li>
                
            </ul>
    )           :<h1>No Result Found</h1>
    }        */}
      
    



      
    </div>
  )
}

export default AddProductLeave