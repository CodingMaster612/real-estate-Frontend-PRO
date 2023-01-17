import axios from 'axios'
import React, { useState } from 'react'

function BuyProductBox() {

   
    const [customer, setCustomer] = useState({
       
    })


    const changeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        const tempCustomer = { ...customer }
        tempCustomer[name] = value
        setCustomer(tempCustomer)
    }

    const submitHandler = () => {
        const propertyId= 4;
        const customerId = 2;
        axios.post(`http://localhost:8081/customer/purchase/${propertyId}/${customerId}`, customer)
        .then((response) => {
            // Logically do what you gotta do
            console.log(response.data)
           
        }).catch((e) => {
            console.log(e.response)
        })

    }

    return (
        
        <button onClick={submitHandler}>Click Me to buy house</button>
        
        )
}

export default BuyProductBox