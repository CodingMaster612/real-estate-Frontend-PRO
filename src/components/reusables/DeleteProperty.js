import axios from 'axios'
import React, { useState } from 'react'

import '../../css/reusables/addProperty.css'


function deletePropertyBox() {
   const [agent, setAgent] = useState({
      

   })


   

   const submitHandler = () => {


    const id = 1;
      axios.delete(`http://localhost:8081/agent/deleteUserById/${id}`)
         .then((response) => {



            


            console.log(response.data)

            alert("Property deleted successfully")
         }).catch((e) => {
            console.log(e)
         })

   }

   return (
      
<div> 
    <button className="result-Button" onClick={submitHandler}></button>
</div>


   )
}

export default deletePropertyBox