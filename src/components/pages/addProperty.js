import React from 'react'
import AddPropertyBox from '../reusables/addPropertyBox.js'







function addProperty() {
    return (
        <header style={HeaderStyle}>
            <div>
                <AddPropertyBox />

            </div>
            
        </header>

    );
}
const HeaderStyle = {
    width: "100%",
    height: "100vh",
    // background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",


}
export default addProperty;