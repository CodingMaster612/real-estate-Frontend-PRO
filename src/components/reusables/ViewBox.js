import axios from 'axios'
import React, { useState ,useEffect } from 'react'

function ViewBox() {

    // useState variable

  const [property, setProperty] = useState({
    contact: "",
    images: "",
    pasted: "",
    price: "",
    size: "",
    location: "",
    date: "",
    discounted: ""
  })
  
  
  useEffect(function(property) {
   

    axios.post("http://localhost:8081/property/viewAll", property)
    .then(function(response) {
        setProperty(response.data)
    })
    .catch((e) => {
      console.log(e)
    }) 

  }, [])

    return (
        
        <header style={HeaderStyle}>
          

        {property.location}
        {property.contact}
        {property.price}
        {property.size}


            






        </header>
    )
}
const HeaderStyle = {
    width: "100%",
    height: "100vh",
    // background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "white"
}
export default ViewBox