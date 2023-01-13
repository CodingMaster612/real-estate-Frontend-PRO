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
            <input placeholder="username" type="text" onChange={changeHandler} name="username" value={customer.username} />
            <input placeholder="Password" type="password" onChange={changeHandler} name="password" value={customer.password} />
            <button onClick={submitHandler}>Submit</button>
        </div>
    )
}

export default SignInBox