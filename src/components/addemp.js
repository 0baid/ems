import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addEmp} from '../actions/addEmp';

class addemp extends Component {
    state = {
        name:"obaid",
        id:"sda",
        imgSrc:"www.imagelink.com/blah/blah",
        skills:["boht sari"]
    }
    render() { 
        return ( 
            <div>
                <form>
                    <div className="form-group col-md-4">
                        <label className="font-weight-bold">Employee Name:</label>
                        <input class="form-control" id="name"></input>
                        <label className="font-weight-bold">Employee Skill:</label>
                        <input class="form-control" id="skill"></input>
                        <label className="font-weight-bold">Employee ID:</label>
                        <input class="form-control" id="id"></input>
                        <label className="font-weight-bold">Link to Profile Picture:</label>
                        <input class="form-control" id="src"></input>
                    </div>
                </form>
                <button className="btn btn-primary mt-3" onClick={
                    ()=>this.props.addEmp(this.state)
                }>Submit</button>
            </div>
        );
    }
    onSubmit()
    {
        this.setState({
            name:document.getElementById("name").value,
            id:document.getElementById("id").value,
            imgSrc:document.getElementById("src").value,
            skills:this.state.skills.push(document.getElementById("skill").value)
        }) 
        this.props.addEmp(this.state);
    }

}

const mapStateToProps = state  =>({
    list: state.addEmpReducer.skills,
    name: state.addEmpReducer.name,
    ID: state.addEmpReducer.ID,
    imgSrc: state.addEmpReducer.imgSrc

})
export default connect( mapStateToProps,{addEmp})(addemp);