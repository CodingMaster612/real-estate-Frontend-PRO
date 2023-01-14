import axios from 'axios'
import React, { useState ,useEffect } from 'react'

function ViewBox() {

    // useState variable

  const [user, setUser] = useState({})
  const [filters, setFilters] = useState({
    year: null,
    make: null,
    model: null
  })
  
  useEffect(function() {
    const email = localStorage.getItem("studentEmail")

    axios.get(`http://localhost:8080/getStudentByEmail/${email}`)
    .then(function(response) {
        setUser(response.data)
    })
    .catch((e) => {
      console.log(e)
    }) 

  }, [])

    return (
        
        <header style={HeaderStyle}>
          

        This is a place holder


            






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