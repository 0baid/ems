import React, { Component } from 'react';

class editform extends Component {
    state={}
    render() { 
        return (     
                <div>
                   <form>
                        <div className="form-group col-md-4">
                            <label className="font-weight-bold">Employee Name:</label>
                            <input class="form-control" id="name"/>
                            <label className="font-weight-bold">Employee ID:</label>
                            <input class="form-control" id="skill"></input>
                            <label className="font-weight-bold">Employee Skill:</label>
                            <input class="form-control" id="skill"></input>
                            <label className="font-weight-bold">Link to Profile Picture:</label>
                            <input class="form-control" id="age"></input>

                            <button className="btn btn-primary mt-3">Submit</button>
                        </div>
                    </form>
                </div>
                )
            }
        }   
export default editform;