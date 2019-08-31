import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addSkills} from '../actions/addSkills';


class empcard extends Component {
    state = { }
    render() { 
        return (
            <div className="col-sm-6">    
                <div className="card mt-5">
                    <div className="col-sm-4 mt-4"> 
                        <img className="card-img-top" src="https://picsum.photos/id/309/200/200" alt="employeeImg"/>
                    </div>
                    <div className="card-body">
                        <div className="row"><h5 className="card-title">Name:</h5><h5>{this.props.name}</h5></div>
                        <div className="row"><h5 className="card-title">Employee ID:</h5><h5>{this.props.ID}</h5></div>
                        <h5 className="card-title">Employee Skills:</h5>
                        <ul className="list-group ml-5">
                        {
                            this.props.list.map(item => <li>{item}</li>)
                        }
                        </ul>
                        <input className="form-control float-right col-md-4" id="skills"/>
                        <button className="btn btn-info float-right" onClick={() => this.props.addSkills(document.getElementById("skills").value)}>Add Skills</button>
                    </div>
                </div>
            </div>   
        );
    }
}
 
const mapStateToProps = state  =>({
    list: state.addReducer.skills,
    name: state.addReducer.name,
    ID: state.addReducer.ID

})
export default connect( mapStateToProps,{addSkills})(empcard);