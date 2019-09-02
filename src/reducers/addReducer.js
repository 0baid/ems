const state = {
    name:"Obaid",
    ID:"16NTU1167",
    imgSrc:"https://picsum.photos/id/309/200/200",
    skills:["graphics","photoshop"]
}

const addReducer = (mState = clone(state), action ) =>{
    switch(action.type){
        case "ADD_DATA": 
            mState.skills.push(action.payload)
            return clone(mState);
        default:
            return clone(mState);
    }
}

const clone = (obj) => {
    return JSON.parse(JSON.stringify(obj));
}


export default addReducer;
