import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
    return (
        <div className="row valign-wrapper" style={{ height: "100vh" }}>
            <div className="container">
                <form className="col s12 white" style={{ borderRadius: "24px", padding: "20px" }}>
                    <h3 className="center-align">Sign Up</h3>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">person</i>
                            <input id="name" type="text" className="validate" />
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="input-field col s12">
                            <i className="material-icons prefix">account_circle</i>
                            <input id="email" type="email" className="validate" />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-field col s12">
                            <i className="material-icons prefix">lock</i>
                            <input id="password" type="password" className="validate" />
                            <label htmlFor="password">Password</label>
                        </div>
                        <input id="submit" type="submit" className="btn center-align col s3 offset-s3" style={{borderRadius:"24px"}}/>
                        <Link to="/" style={{paddingLeft:"20px"}}>Already have an account?</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp