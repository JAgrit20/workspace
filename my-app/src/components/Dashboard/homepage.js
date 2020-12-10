
import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { auth } from '../../../src/fbconfig';
import M from 'materialize-css'
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import navbar from '../layout/Navbar'

function SignUp() {
    return (
        <div>
            <navbar/>
            <div className="valign-wrapper" style={{ position:"relative", height: "80px", width: "100%", backgroundColor: "#6771E3", borderRadius: "0 0 0 70px"}}>
                <h5 style={{ margin: "0", paddingLeft: "69px", color:"white"}}>ReactBase</h5>
                <a className="white-text" style={{ position: "absolute", right: "40px", cursor: "pointer"}}>Log Out</a>
            </div>

            <div className="container" style={{ width: "90%" }}>
                <div class="row">
                    <div class="col s12 m6 l4">
                        <div class="card white" style={{borderRadius: "24px"}}>
                            <div class="card-content white-text valign-wrapper" style={{height: "200px"}}>
                                <p className="black-text" style={{margin: "0 auto"}}>Create a new project</p>
                            </div>
                            <div class="card-action" style={{borderRadius: "24px"}}>
                                <a href="#">Click here to create</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
      </div>


    
    )
}
 
export default SignUp