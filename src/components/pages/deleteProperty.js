import React from 'react'
import DeleteProperty from '../reusables/DeleteProperty.js';







function deleteProperty() {
    return (
        <header style={HeaderStyle}>
            <div>
                <DeleteProperty/>

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
export default deleteProperty;