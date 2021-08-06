export const addDeadline = (deadline) => {
    return (dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore
            .collection("deadlines")
            .add({
                ...deadline,
                authorFirstName: profile.firstName,
                authorLastName: profile.lastName,
                authorId: authorId,
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