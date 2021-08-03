export const addDeadline = (deadline) => {
    return (dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore();
        firestore
            .collection("deadlines")
            .add({
                ...deadline,
                authorFirstName: "Sahib",
                authorLastName: "Singh",
                authorId: "1234",
                createdAt: new Date()
            })
            .then(() => {
                dispatch({type: "ADD_DEADLINE", deadline});
            })
            .catch((err) => {
                dispatch({type: "ADD_DEADLINE_ERROR", err});
            });
    };
};