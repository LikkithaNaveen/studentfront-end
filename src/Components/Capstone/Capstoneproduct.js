import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const CapstoneProduct = () => {
    const[addcapstone,setAddcapstone]=useState([])

    useEffect(()=>{
        getCapstonedetails();
    },[])

    const getCapstonedetails=async()=>{
        let result=await fetch('https://studentdashboard-new-2.onrender.com/capstone-details',{
            headers:{
                        authorization:`Bearer ${JSON.parse(localStorage.getItem('token'))}`
                    }
        })
       
        result=await result.json()
        setAddcapstone(result)
    }
    

   


    const capstonedelete=async (id)=>{
        let result=await fetch(`https://studentdashboard-new-2.onrender.com/capstone-details/${id}`,{
            method:"Delete"

        });
        result=await result.json()
        if(result)
        {
            getCapstonedetails()
        }

    }


    const searchcapstonedetails=async(event)=>{
        let key=event.target.value;
        if(key){
            let result=await fetch(`https://studentdashboard-new-2.onrender.com/searchcapstone/${key}`)
            //     headers:{
            //                 authorization:`Bearer ${JSON.parse(localStorage.getItem('token'))}`
            //             }
            // });
            result=await result.json()
            if(result)
            {
                setAddcapstone(result)
            }
            else{
                getCapstonedetails()
            }
            

        }
    }

  return (
    <div>
    
    {/* <i class="fa fa-search-plus"/><input  class='SearchProduct' type='text' placeholder='Search'
        onChange={searchcapstonedetails}/> */}
       <div class="wrap">
    <div class="search">
        <input type="text" class="searchTerm" placeholder="What are you looking for?" 
        onChange={searchcapstonedetails}/>
        <button type="submit" class="searchButton"  > 
            <i class="fa fa-search"></i>
        </button>
    </div>
    </div>

   
    <div class='tablebody'>
    <div class="tablecontainer1">
        <table>
        <thead>
              <tr>
                <th> S.no </th>
                <th>Student Name</th>
                <th>Capstone Title</th>
                <th>Language</th>
                <th>Status</th>
                <th>Description</th>
                <th>Operation</th>
              </tr>
            </thead>
            {
              addcapstone.length > 0 ? addcapstone.map((item, index) =>
                <tbody>
                  <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.capstonetitle}</td>
                    <td>{item.language}</td>
                    <td>{item.status}</td>
                    <td>{item.desc}</td>
                    <td><button class='buttonstyledelupd' type="submit" onClick={() => capstonedelete(item._id)}>Delete</button>
                      <button class='buttonstyledelupd'><Link style={{ textDecoration: 'none', color: 'white' }}
                        to={"/updatecapstone/" + item._id}>Update</Link></button></td>
                  </tr>

                </tbody>
              ) : <tbody>No Result Found</tbody>
            }
        </table>
    </div>
    </div>
      
      
    



      
    </div>
  )
}

export default CapstoneProduct