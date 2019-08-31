import React, { Component } from 'react';

class removeemp extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className="form-group col-md-4">
                    <label className="font-weight-bold">Employee ID:</label>
                    <input class="form-control" id="name"/>
                    <button className="btn btn-danger mt-3">Delete</button>
                </div>
            </div>
         );
    }
}
 
export default removeemp;