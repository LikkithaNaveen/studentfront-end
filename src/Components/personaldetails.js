import React, { useEffect,useCallback, useState } from 'react'
import { Link } from 'react-router-dom';
import CapstoneProduct from './Capstone/Capstoneproduct';
import Calender from './Calender'

const Personaldetails = () => {
    const[products,setProducts]=useState([])
    const[taskassign,setTaskassign]=useState([])
   

    const auth=localStorage.getItem('user')
    
    

    useEffect(()=>{
        getProducts();
        gettaskdetails();
    },[])

    const getProducts=async()=>{
        let result=await fetch('https://studentdashboard-new-2.onrender.com/personal-details')
        // {
        //     headers:{
        //                 authorization:`Bearer ${JSON.parse(localStorage.getItem('token'))}`
        //             }
        // })
       
        result=await result.json()
        setProducts(result)
    }
   

    const gettaskdetails=async()=>{
        let result=await fetch('https://studentdashboard-new-2.onrender.com/addTask-details')
        // {
        //     headers:{
        //                 authorization:`Bearer ${JSON.parse(localStorage.getItem('token'))}`
        //             }
        // })
       
        result=await result.json()
        setTaskassign(result)
    }
    //console.warn("products",products)

    const deletedetails=async (id)=>{
        let result=await fetch(`https://studentdashboard-new-2.onrender.com/personal-details/${id}`,{
            method:"Delete"

        });
        result=await result.json()
        if(result)
        {
            getProducts()
        }

    }

    const productdelete=async (id)=>{
        let result=await fetch(`https://studentdashboard-new-2.onrender.com/addTask-details/${id}`,{
            method:"Delete"

        });
        result=await result.json()
        if(result)
        {
            gettaskdetails()
        }

    }
     

    const searchhandle=async(event)=>{
        let key=event.target.value;
        if(key){
            let result=await fetch(`https://studentdashboard-new-2.onrender.com/search/${key}`,{
                headers:{
                            authorization:`Bearer ${JSON.parse(localStorage.getItem('token'))}`
                        }
            });
            result=await result.json()
            if(result)
            {
                setProducts(result)
            }
            else{
                getProducts()
            }
            

        }
    }

    const searchtaskdetails=async(event)=>{
        let key=event.target.value;
        if(key){
            let result=await fetch(`https://studentdashboard-new-2.onrender.com/searchtask/${key}`)
            //     headers:{
            //                 authorization:`Bearer ${JSON.parse(localStorage.getItem('token'))}`
            //             }
            // });
            result=await result.json()
            if(result)
            {
                setTaskassign(result)
            }
            else{
                gettaskdetails()
            }
            

        }
    }
  return (
    <div className="Personaldetails">

<div class="wrap1">
    <div class="search">
        <input type="text" class="searchTerm" placeholder="What are you looking for?" 
        onChange={searchhandle}/>
        <button type="submit" class="searchButton"  > 
            <i class="fa fa-search"></i>
        </button>
    </div>
    </div>

   
    <div class='tablebody1'>
    <div class="tablecontainer2">
        <table>
        <thead>
              <tr>
                <th> S.no </th>
                <th>Student Name</th>
                <th>Student Email</th>
                <th>Student Age</th>
                <th>Phone No</th>
                <th>Gender</th>
                <th>Spec</th>
                <th>Category</th>
                <th>Description</th>
                <th>Operation</th>
              </tr>
            </thead>
            {
              products.length > 0 ? products.map((item, index) =>
                <tbody>
                  <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.age}</td>
                    <td>{item.phonenumber}</td>
                    <td>{item.gender}</td>
                    <td>{item.spec}</td>
                    <td>{item.category}</td>
                    <td>{item.desc}</td>
                    <td><button class='buttonstyledelupd' type="submit" onClick={() => deletedetails(item._id)}>Delete</button>
                      <button class='buttonstyledelupd'><Link style={{ textDecoration: 'none', color: 'white' }}
                        to={"/update/" + item._id}>Update</Link></button></td>
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

export default Personaldetails