export const addEmp = (EmpDetails) => dispatch => {
    const state={
        type:"ADD_EMP_DATA",
        payload:EmpDetails
    }
    dispatch(state)
}
