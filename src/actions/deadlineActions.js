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

export const removeDeadline = (deadline) => {
    return (dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore();
        firestore
            .collection("deadlines")
            .doc(deadline.id)
            .delete()
            .then(() => {
                dispatch({
                    type: "REMOVED_DEADLINE"
                });
            })
            .catch((err) => {
                dispatch({
                    type: "REMOVED_DEADLINE_ERR",
                    err
                });
            });
    };
};