const state = {
    name:"",
    ID:"",
    imgSrc:"",
    skills:[""]
    
}

const addEmpReducer = (mState = clone(state), action ) =>{
    switch(action.type){
        case "ADD_EMP":
            mState=action.payload;
            return clone(mState);

        default: 
            return clone(mState);
    }
}

const clone = (obj) => {
    return JSON.parse(JSON.stringify(obj));
}


export default addEmpReducer;
