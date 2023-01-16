import axios from 'axios'
import React, { useState ,useEffect } from 'react'

function ViewBox() {


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
  
  
  useEffect(function(contact) {
   
    
    axios.get(`http://localhost:8081/property/viewAll`)
    .then(function(response) {
        setProperty(response.data)
    })
    .catch((e) => {
      console.log(e)
    }) 

  }, [])

    return (
        
        <header style={HeaderStyle}>
          

        
            <h3>{property.contact}</h3>

            






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