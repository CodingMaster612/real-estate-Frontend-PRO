import React from 'react'



function PropertyInfoBox(props) {
    return (
        <div>
            <div>{props.property.price}</div>
            <div>{props.property.posted}</div>
            <div>{props.property.location}</div>
            <div>{props.property.discounted}</div>
            <div>{props.property.contact}</div>
            <div>{props.property.date}</div>
            <div>{props.property.contact}</div>
            <div><img src={props.property.images} /></div>
            {/* <Button  value={props.property.propertyId} onClick={props.onClick} /> */}
            
        </div>
    )
}

export default PropertyInfoBox