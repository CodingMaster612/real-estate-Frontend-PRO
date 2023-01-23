import React from 'react'
import SignInBox from '../reusables/SignInBox.js'



function signIn() {
    return (
        <header style={HeaderStyle}>
            <div>
                <SignInBox/>
                
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
export default signIn;