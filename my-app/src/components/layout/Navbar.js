import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../../src/fbconfig';
import firebase from 'firebase'
import { auth } from '../../../src/fbconfig';

function Navbar({props}) {

    const [email, setEmail] = useState('')
    const arrayUnion = firebase.firestore.FieldValue.arrayUnion;

    useEffect(() => {
        window.$(document).ready(function () {
          window.$('.modal').modal();
          window.$('#textarea1').val('');
          window.$('input#input_text, textarea#textarea2').characterCounter();
        });
      }, [])

    
    const getEmail = (e) => {
        setEmail(e.target.value)
    }

    const addPerson = (e) => {
        db.collection('users').get().then((data) => {
            data.forEach(d => {
                if(d.data().Email === email) {
                    db.collection('workspace').doc('FY062lw5iQqUKfMCa4dE').update({'People': arrayUnion({'Name': d.data().Name, 'UID': d.data().UID})})
                    console.log("Person added")
                }
            })
        })
    }

    return (
        <div style={{ width: "100%" }}>
            <nav style={{ backgroundColor: "#5964E0" }}>
                <div className="nav-wrapper">
                    <a href="#!" className="brand-logo" style={{ paddingLeft: "69px" }}>ReactBase</a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to="/workspace">Homepage</Link></li>
                        <li><a className="modal-trigger" href="#modal3">Add People</a></li>
                        <li><Link onClick={() => {auth.signOut(); props.history.push('/')}}>Logout</Link></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><Link to="/workspace">Homepage</Link></li>
                <li><Link>Add People</Link></li>
                <li><Link>Logout</Link></li>
            </ul>
            <div id="modal3" className="modal modal-fixed-footer" style={{ marginTop: '200px' }}>
                <div className="modal-content">
                    <h4>Add People</h4>
                    <label for="textarea1">Enter email</label>
                    <textarea id="textarea1" className="materialize-textarea" onChange={(e) => getEmail(e)} data-length="120"></textarea>
                </div>
                <div className="modal-footer">
                    <a onClick={() => addPerson()} className="modal-close waves-effect waves-green btn-flat">Add People</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar