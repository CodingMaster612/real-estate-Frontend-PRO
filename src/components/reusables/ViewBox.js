import React, { useState, useEffect } from "react";
import axios from "axios";

function ViewBox() {

    const [property, setProperty] = useState({
        
    })
    useEffect(function() {
        const price = localStorage.getItem("propertyListing")
        axios.get("http://localhost:8081/property/viewAll").then(function(response){
                setProperty(response.data)
                //add ${price}... and ${location}
        } )

                
            }).catch((e) => {
                console.log(e)
            }, [])
    
            return (
                <div>
                    
                    
                </div>
        
            )
    
        }
    
        export default ViewBox