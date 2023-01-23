import React from 'react'
import SignUpBox from '../reusables/SignUpBox'



function signUp() {
    return (
        <header style={HeaderStyle}>
            <div>
            <SignUpBox />
            
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
export default signUp;