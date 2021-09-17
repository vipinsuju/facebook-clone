import React from 'react'
import Headerimage from '../../Images/Headerimage'
import Card from '../../UI/Card'
import Custombutton from '../../UI/Custombutton'
import Inputfield from '../../UI/Inputfield'
import Mainhead from '../../UI/Mainhead'
import { Link } from "react-router-dom";

import "../Register/Register.css"

const Register = () => {
    return (
        <div className="login" >



            <center>
                <Headerimage />
                <Card  style = "card regcard " >
                    <Mainhead
                        title="Register"
                    />
                    <center  >
                    

                        

                            <Inputfield style="input-field "
                                placeholder="First Name"
                                type="text"
                            />


                            <Inputfield style="input-field "
                                placeholder="Last Name"
                                type="text"
                            />
                        
                   
                   </center>

                    <center>
                        

                        <Inputfield 

                        style = "input-field d2"
                        placeholder="Email"
                        type ="email"
                        />
                       

                    </center>
                    <center>
                    <Inputfield style = "input-field d2"
                        placeholder="Password"
                        type="password"
                    />





               
                

                </center>



                <center>
                    <Custombutton style="custombutton register-btn"
                        type="submit"


                    >
                        Register

                    </Custombutton>
                </center>

                <center>
                    <Link to="/Login" style={{ textDecoration: "none" }}  >
                        <p className="register-login"> Already have an account ? </p>
                    </Link>
                </center>


            </Card>
        </center>
        </div >

    )
}

export default Register;

