import axios from 'axios'
import React, { useState } from 'react'

function SignInBox() {

    const [customer, setCustomer] = useState({
        password:"",
        username:""
    })


    const changeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        const tempCustomer = { ...customer }
        tempCustomer[name] = value
        setCustomer(tempCustomer)
    }

    const submitHandler = () => {

        

        axios.post("http://localhost:8081/customer/signIn", customer)
        .then((response) => {
            // Logically do what you gotta do
            console.log(response.data)
        }).catch((e) => {
            console.log(e)
        })

    }

    return (
        <div> 

        </div>
    )
}

export default SignInBox