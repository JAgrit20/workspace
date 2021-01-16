import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {auth,db} from '../../fbconfig'
 
function SignUp(props) {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  // const handleSubmit = (e) =>{
  //   e.preventDefault();
  //   auth.createUserWithEmailAndPassword(email,pass).then((data) =>{
  //     db.collection('users').doc().set({
  //       'Name':name,
  //       'Email':email,
  //       'UID': data.user.uid
  //     })
  //   })
  // }
  const handleSubmit = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, pass).then((data) => {
        data.user.updateProfile({
            displayName: name
        }).then(() => {
            db.collection('users').doc().set({
                'Name': name,
                'Email': email,
                'UID': data.user.uid
            })
        }).then(() => {
            props.history.push('')
        })
    })
}
    return (
        <div className="row valign-wrapper" style={{height:"100vh"}}>
            <div className="container" >
    <form className="col s12 white " onSubmit={handleSubmit} style={{borderRadius:"24px", padding:"20px"}} >
        <h3 className="center-align">Sign Up</h3>
      <div className="row ">
        <div className="input-field col s12 ">
          <i className="material-icons prefix green-text text-darken-2">person</i>
          <input id="name" onChange={(e) => setName(e.target.value)} type="text" className="validate " />
          <label htmlFor="name">Name</label>
        </div>
        <div className="input-field col s12 ">
          <i className="material-icons prefix green-text text-darken-2">account_circle</i>
          <input id="email" type="text" onChange={(e) => setEmail(e.target.value)} className="validate " />
          <label htmlFor="email">Email</label>
        </div>
        <div className="input-field col s12">
          <i className="material-icons prefix green-text text-darken-2">lock</i>
          <input id="password" onChange={(e) => setPass(e.target.value)} type="password" className="validate" />
          <label htmlFor="password">password</label>
        </div>
      </div>
      {/* <div className="row valign-wrapper">
      <button class="btn waves-effect waves-light" type="submit" name="action">Submit
    <i class="material-icons center-align">send</i>
  </button>
  </div> */}
  <input id="submit" type="submit" className="btn center-align col s3 offset-s3" style={{borderRadius:"14px"}} />
  <Link to="/sigIn" style={{paddingLeft:"12px",fontSize:"22px"}}>Already have an account</Link>

    </form>
    </div>
  </div>
        
    
    )
}
 
export default SignUp


