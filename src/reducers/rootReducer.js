import {combineReducers} from 'redux';
import addReducer from './addReducer';
import addEmpReducer from './addEmpReducer';



const rootReducer = combineReducers(
    {
        addReducer,
        addEmpReducer
    }
)

export default rootReducer;