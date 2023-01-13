import axios from 'axios'
import React, { useState } from 'react'

function AddPropertyBox() {

    const [agent, setAgent] = useState({
        contact:"",
        images:"",
        pasted:"",
        price:"",
        size: "",
        location: "",
        date: "",
        discounted: ""

    })


    const changeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        const tempAgent = { ...agent }
        tempAgent[name] = value
        setAgent(tempAgent)
    }

    const submitHandler = () => {

        

        axios.post("http://localhost:8081/agent/createProperty", agent)
        .then((response) => {
            // Logically do what you gotta do
            console.log(response.data)
            alert("Property created successfully")
        }).catch((e) => {
            console.log(e)
        })

    }

    return (
        <div>
            <input placeholder="contact" type="text" onChange={changeHandler} name="contact" value={agent.contact} />
            <input placeholder="image" type="text" onChange={changeHandler} name="images" value={agent.images} />
            <input placeholder="posted" type="text" onChange={changeHandler} name="posted" value={agent.posted} />
            <input placeholder="price" type="text" onChange={changeHandler} name="price" value={agent.price} />
            <input placeholder="size" type="text" onChange={changeHandler} name="size" value={agent.size} />
            <input placeholder="Location" type="text" onChange={changeHandler} name="location" value={agent.location} />
            <input placeholder="date" type="text" onChange={changeHandler} name="date" value={agent.date} />
            <input placeholder="discounted" type="text" onChange={changeHandler} name="discounted" value={agent.discounted} />

            <button onClick={submitHandler}>Submit</button>
        </div>
    )
}

export default AddPropertyBox