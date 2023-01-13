import axios from 'axios'
import React, { useState } from 'react'
import '../../css/reusables/addProperty.css'


function AddPropertyBox() {

    const [agent, setAgent] = useState({
        contact: "",
        images: "",
        pasted: "",
        price: "",
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
                localStorage.setItem("propertyListing", response.data.propertyListing)

                alert("Property created successfully")
            }).catch((e) => {
                console.log(e)
            })

    }

    return (
        <div className="input-wrapper">
            <div className="input-group">
   <div className="contact-input">
      <input placeholder="contact" type="text" onChange={changeHandler} name="contact" value={agent.contact} />
   </div>
   <div className="image-input">
      <input placeholder="image" type="text" onChange={changeHandler} name="images" value={agent.images} />
   </div>
   <div className="posted-input">
      <input placeholder="posted" type="text" onChange={changeHandler} name="posted" value={agent.posted} />
   </div>
   <div className="price-input">
      <input placeholder="price" type="text" onChange={changeHandler} name="price" value={agent.price} />
   </div>
   <div className="size-input">
      <input placeholder="size" type="text" onChange={changeHandler} name="size" value={agent.size} />
   </div>
   <div className="location-input">
      <input placeholder="Location" type="text" onChange={changeHandler} name="location" value={agent.location} />
   </div>
   <div className="date-input">
      <input placeholder="date" type="text" onChange={changeHandler} name="date" value={agent.date} />
   </div>
   <div className="discounted-input">
      <input placeholder="discounted" type="text" onChange={changeHandler} name="discounted" value={agent.discounted} />
   </div >
   <div className="btn-position">
   <button className="btn-size" onClick={submitHandler}>Submit</button>
   </div>
</div>
</div>



    )
}

export default AddPropertyBox