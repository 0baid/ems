import React, { Component } from 'react';
import Empcard from './empcard';
import {BrowserRouter as Router,Switch ,Route,Link} from "react-router-dom";


class emplist extends Component {
    state = {  }
    render() { 
        return (
            <Router>    
                <ul className="list-group">
                    <li className="list-group-item"><Link to="/list/employee" >Employee 1</Link></li>
                </ul>

                <Switch>
                    <Route path="/list/employee" exact render={
                            ()=>{
                            return(<Empcard/>)
                            }
                        }/>
                </Switch>
            </Router>    
         );
    }
}
 
export default emplist;