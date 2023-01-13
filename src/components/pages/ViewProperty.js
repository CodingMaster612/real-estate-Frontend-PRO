import ViewBox from '../reusables/ViewBox'
import React from 'react'


function View() {
    return (
        <header style={HeaderStyle}>
            <div>
            <ViewBox/>
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
export default View;