import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../css/reusables/signUp.css'
function SignUpBox() {

    const navigate = useNavigate()
    const [customer, setCustomer] = useState({

        password: "",
        username: ""

    })


    const changeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        const tempCustomer = { ...customer }
        tempCustomer[name] = value
        setCustomer(tempCustomer)
    }

    const submitHandler = () => {

        // const number = 1;



        axios.post("http://localhost:8081/customer/signUp", customer)
            .then((response) => {
                // Form tag was messing up the navigate, causing query params to show. so dont use form tags!
                navigate("/signIn")
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

export default SignUpBox