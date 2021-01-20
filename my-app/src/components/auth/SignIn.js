
import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { auth } from '../../../src/fbconfig';
import M from 'materialize-css'

 
function SignIn() {
  const [pass,setPass] = useState('')
  const [email,setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    auth.signInWithEmailAndPassword(email,pass).then(()=>{
      console.log("sign in Successful")
    }).catch(err =>{
      M.toast({html:err.message})
    })
  }
    return (
        <div className="row valign-wrapper" style={{height:"100vh"}}>
            <div className="container" >
    <form className="col s12 white " onSubmit={handleSubmit} style={{borderRadius:"24px", padding:"20px"}} >
        <h3 className="center-align">Sign In</h3>
      <div className="row " >
        <div className="input-field col s12 ">
          <i className="material-icons prefix blue-text text-darken-2">account_circle</i>
          <input id="email" type="text" onChange={(e)=> setEmail(e.target.value)} className="validate " />
          <label htmlFor="email">Email</label>
        </div>
        <div className="input-field col s12">
          <i className="material-icons prefix blue-text text-darken-2">lock</i>
          <input id="password" type="password" onChange={(e)=>setPass(e.target.value)} className="validate" />
          <label htmlFor="password">password</label>
        </div>
      </div>
      {/* <div className="row valign-wrapper">
      <button class="btn waves-effect waves-light" type="submit" name="action">Submit
    <i class="material-icons center-align">send</i>
  </button>
  </div> */}
  <input id="submit" type="submit" className="btn center-align col s3 offset-s3" style={{borderRadius:"14px"}} />
  <Link to="/SignUp" style={{paddingLeft:"12px",fontSize:"22px"}}>Don't have an account</Link>

    </form>
    </div>
  </div>
        
    
    )
}
 
export default SignIn