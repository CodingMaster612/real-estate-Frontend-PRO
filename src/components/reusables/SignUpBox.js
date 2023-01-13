import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../css/reusables/signUp.css'
function SignUpBox() {

    const navigate = useNavigate()
    const [customer, setCustomer] = useState({

        password: "",
        username: ""

    })


    const changeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        const tempCustomer = { ...customer }
        tempCustomer[name] = value
        setCustomer(tempCustomer)
    }

    const submitHandler = () => {

        // const number = 1;



        axios.post("http://localhost:8081/customer/signUp", customer)
            .then((response) => {
                // Form tag was messing up the navigate, causing query params to show. so dont use form tags!
                navigate("/signIn")
            }).catch((e) => {
                console.log(e)
            })

    }

    return (


        <header style={HeaderStyle}>
            <div className="container">
                <div className="screen">
                    <div className="screen__content">
                        <form className="login">
                            <div className="login__field">
                                <i className="login__icon fas fa-user"></i>
                                <input placeholder="username" type="text" className="login__input" onChange={changeHandler} name="username" value={customer.username} />
                            </div>
                            <div className="login__field">
                                <i className="login__icon fas fa-lock"></i>
                                <input placeholder="Password" type="password" className="login__input" onChange={changeHandler} name="password" value={customer.password} />

                            </div>
                            
                            <button  className="button login__submit"onClick={submitHandler}>

                                <span className="button__text">Sign Up Now</span>
                                <i className="button__icon fas fa-chevron-right"></i>
                            </button>
                        </form>
                        <div className="social-login">
                            <h3>Sign Up</h3>
                            <div className="social-icons">
                                <a href="#" className="social-login__icon fab fa-instagram"></a>
                                <a href="#" className="social-login__icon fab fa-facebook"></a>
                                <a href="#" className="social-login__icon fab fa-twitter"></a>
                            </div>
                        </div>
                    </div>
                    <div className="screen__background">
                        <span className="screen__background__shape screen__background__shape4"></span>
                        <span className="screen__background__shape screen__background__shape3"></span>
                        <span className="screen__background__shape screen__background__shape2"></span>
                        <span className="screen__background__shape screen__background__shape1"></span>
                    </div>

                </div>


            </div>




            {/* <div>
                <input placeholder="username" type="text" onChange={changeHandler} name="username" value={customer.username} />
                <input placeholder="Password" type="password" onChange={changeHandler} name="password" value={customer.password} />
                <button onClick={submitHandler}>Submit</button>
            </div> */}






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
}

export default SignUpBox