import React from 'react'
import RequirementFE from './RequirementFE'
import {RequirementProduct} from './UtlisRequirement'

const RequirementProductBE = () => {
  return (
    
    <>

      <div >
      <h1 class='headingtaskass'>REQUIREMENT</h1><br></br>
         {/* <i class="fa fa-search-plus"/><input  class='Searchrequirement2' type='text' placeholder='Search'/><br></br> */}
      {/* <div class="wrap">
    <div class="search">
        <input type="text" class="searchTerm" placeholder="What are you looking for?" 
        onChange={searchcapstonedetails}/>
        <button type="submit" class="searchButton"  > 
            <i class="fa fa-search"></i>
        </button>
    </div>
    </div> */}
        
        {
        RequirementProduct.map((element) => (
        <RequirementFE    {...element} />))
        }
      </div>
      </>
      

  )
}

export default RequirementProductBE