import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const QueriesProduct = () => {
    const[addquery,setAddquery]=useState([])

    useEffect(()=>{
        getQueryProduct();
    },[])

    const getQueryProduct=async()=>{
        let result=await fetch('https://studentdashboard-new-2.onrender.com/Queries-details',{
            headers:{
                        authorization:`Bearer ${JSON.parse(localStorage.getItem('token'))}`
                    }
        })
       
        result=await result.json()
        setAddquery(result)
    }
    

   


    const Querydelete=async (id)=>{
        let result=await fetch(`https://studentdashboard-new-2.onrender.com/Queries-details/${id}`,{
            method:"Delete"

        });
        result=await result.json()
        if(result)
        {
            getQueryProduct()
        }

    }


    const searchQueryproduct=async(event)=>{
        let key=event.target.value;
        if(key){
            let result=await fetch(`https://studentdashboard-new-2.onrender.com/searchqueries/${key}`)
            //     headers:{
            //                 authorization:`Bearer ${JSON.parse(localStorage.getItem('token'))}`
            //             }
            // });
            result=await result.json()
            if(result)
            {
                setAddquery(result)
            }
            else{
                getQueryProduct()
            }
            

        }
    }

  return (
    <div>
               <div class="wrap">
    <div class="search">
        <input type="text" class="searchTerm" placeholder="What are you looking for?"
        onChange={searchQueryproduct}/>
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
                <th>Topic Category</th>
                <th>Language</th>
                <th>Query Title</th>
                <th>Description</th>
                <th>Timings</th>
                <th>Operation</th>
              </tr>
            </thead>
            {
              addquery.length > 0 ? addquery.map((item, index) =>
                <tbody>
                  <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.topiccategory}</td>
                    <td>{item.language}</td>
                    <td>{item.title}</td>
                    <td>{item.querydesc}</td>
                    <td>{item.timings}</td>
                    <td><button class='buttonstyledelupd' type="submit" onClick={() => Querydelete(item._id)}>Delete</button>
                      <button class='buttonstyledelupd'><Link style={{ textDecoration: 'none', color: 'white' }}
                        to={"/updateQuery/" + item._id}>Update</Link></button></td>
                  </tr>

                </tbody>
              ) : <tbody>No Result Found</tbody>
            }
        </table>
    </div>
    </div>
      
    {/* <i class="fa fa-search-plus"/><input  class='SearchProduct' type='text' placeholder='Search'
        onChange={searchQueryproduct}/>
        
        {
            addquery.length>0 ? addquery.map((item,index)=>
            <ul key={item._id}>
                <li>{index+1}</li>
                <li>{item.name}</li>
                <li>{item.topiccategory}</li>
                <li>{item.language}</li>
                <li>{item.title}</li>
                <li>{item.querydesc}</li>
                <li>{item.timings}</li>
                <li><button onClick={()=>Querydelete(item._id)}>Delete</button>  
                <button><Link to={"/updateQuery/"+item._id}>Update</Link> </button>
                </li>
                
            </ul>
    )           :<h1>No Result Found</h1>
    } */}
      
    



      
    </div>
  )
}

export default QueriesProduct