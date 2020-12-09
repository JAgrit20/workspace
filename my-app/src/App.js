import React from 'react'
import {Route,Switch,BrowserRouter} from 'react-router-dom';
import SignIn from './components/auth/SignUp'
import SignUp from './components/auth/SignIn'
import DragDrop from './components/Dashboard/DragDrop'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
      
        <Route exact path="/" component={SignIn}/>
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/drag" component={DragDrop}/>

      </Switch>
    </div>
    </BrowserRouter>
   );
}

export default App;
