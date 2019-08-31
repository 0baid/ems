const state = {
    name:"Obaid",
    id:""
}

const addEmpReducer = (mState = clone(state), action ) =>{
    switch(action.type){
        case "ADD_EMP_DATA": 
            mState.name=action.payload.name;
            mState.id=action.payload.id;
            return clone(mState);

        default: 
            return clone(mState);
    }
}

const clone = (obj) => {
    return JSON.parse(JSON.stringify(obj));
}


export default addEmpReducer;
