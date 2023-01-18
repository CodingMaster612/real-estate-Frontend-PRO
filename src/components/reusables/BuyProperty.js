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
       const propertyId= 1;
       const customerId =1;
        axios.post(`http://localhost:8081/customer/purchase/${propertyId}/${customerId}`, customer)
        .then((response) => {
            console.log(response.data)
           
        }).catch((e) => {
            console.log(e.response)
        })

    }

    return (
        <div></div>
        )
}

export default BuyProductBox