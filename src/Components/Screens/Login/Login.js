import React from 'react'
import Headerimage from '../../Images/Headerimage'
import Card from '../../UI/Card'
import Custombutton from '../../UI/Custombutton'
import Inputfield from '../../UI/Inputfield'
import Mainhead from '../../UI/Mainhead'
import { Link } from "react-router-dom";

import "../Login/Login.css"

const Login = () => {
    return (
        <div className = "login" >

       
        
        <center>
            <Headerimage/>
        <Card style = "card lgcard" >
            <Mainhead
                title="Login here"
            />
            <center>

                <Inputfield style = "input-field log"
                    placeholder="Email"
                    type="email"
                />
            </center>

            <center>

                <Inputfield style = "input-field log "
                    placeholder="Password"
                    type="password"
                />
            </center>

            <center>
                <Custombutton style="custombutton login-btn"
                    type="submit"
                    

                >
                    Login

                </Custombutton>
            </center>

            <center>
                   <div className = "sideinfo">
                       <h5>Forgotten password ? </h5>
                       <h5 className = "dot" >.</h5>
                        <Link to ="/register" style = {{ textDecoration:"none" }} >
                            <h5 className = "rtd" > Signup </h5>
                       </Link>
                   </div>
               </center>


        </Card>
        </center>
        </div>
        
    )
}

export default Login
