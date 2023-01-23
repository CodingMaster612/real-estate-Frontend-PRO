import React from 'react'
import '../../css/reusables/Header.css'


function Header() {
    return (
        
            <ul>
                <li><a href="/addProperty">Add Property</a></li>
                <li><a href="/signIn">Sign In</a></li>
                <li><a href="/signUp">SignUp</a></li>
                <li><a href="/viewProperty">View Property</a></li>
            </ul>
       

    );

}

export default Header;