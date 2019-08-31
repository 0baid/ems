import React, { Component } from "react";
import Emplist from "./components/emplist";
import Addemp from "./components/addemp";
import RemoveEmp from "./components/removeemp";
import {BrowserRouter as Router,Switch ,Route,Link} from "react-router-dom";
import {Provider} from 'react-redux';
import store from './store';

class App extends Component {

    render() { 
        return( 
          <Provider store={store}>
            <div>
                <Router>
                  
                    <div>
                      <nav className="navbar navbar-light d-flex justify-content-center">
                        <Link to="/list" exact className="btn btn-primary btn-lg">Employee List</Link>
                        <Link to="/add" exact className="btn btn-success ml-5 btn-lg">Add Employee</Link>                  
                        <Link to="/remove" exact className="btn btn-danger ml-5 btn-lg">Remove Employee</Link>
                      </nav>
                      <Switch>   
                      <Route path="/list" exact render={
                        ()=>{
                          return(<Emplist/>)
                        }
                      }/>
                      
                      
                      <Route path="/add" exact render={
                        ()=>{
                          return(<Addemp/>)
                        }
                      }/>


                      <Route path="/remove" exact render={
                        ()=>{
                          return(<RemoveEmp/>)
                        }
                      }/>
                      </Switch> 
                    
                    </div>
                
                </Router>
            </div>
          </Provider>
        );
    }
}
 
export default App;