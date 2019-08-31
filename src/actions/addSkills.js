export const addSkills = (skills) => dispatch => {
    const state={
        type:"ADD_DATA",
        payload:skills
    }
    dispatch(state)
}
