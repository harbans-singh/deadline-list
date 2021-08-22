import { toast } from "react-toastify"

const deadlineReducer = (state = {}, action) => {
    switch (action.type) {
        case "ADD_DEADLINE":
            toast.success("Added a deadline", {
                position: "bottom-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                });
            return state;
        case "ADD_DEADLINE_ERROR":
            toast.error("Error occured while adding a deadline", {
                position: "bottom-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                });
            return state;
        case "REMOVED_DEADLINE":
            toast.warn("Deadline removed", {
                position: "bottom-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                });
            return state;
        case "REMOVED_DEADLINE_ERR":
            toast.error("Error occured while removing a deadline", {
                position: "bottom-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                });
            return state
        default:
            return state;
    }
}

export default deadlineReducer;