export const addEmp = (EmpDetails) => dispatch => {
    const state={
        type:"ADD_EMP",
        payload:EmpDetails
    }
    dispatch(state)
}
