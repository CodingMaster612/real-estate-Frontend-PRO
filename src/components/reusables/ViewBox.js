import React, { useState, useEffect } from "react";
import axios from "axios";

function ViewBox() {

    const [property, setProperty] = useState({
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
        const tempProperty = { ...property }
        tempProperty[name] = value
        setProperty(tempProperty)
    }

    const submitHandler = () => {



        axios.get("http://localhost:8081/property/viewAll")
        .then((response) => {
            // Logically do what you gotta do
            console.log(response.data)
        }).catch((e) => {
            console.log(e)
        })





}

return (
    <div>
        hi mom
    </div>

)

}






export default ViewBox