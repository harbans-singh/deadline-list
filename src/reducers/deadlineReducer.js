import { toast } from "react-toastify"

const deadlineReducer = (state = {}, action) => {
    switch (action.type) {
        case "ADD_DEADLINE":
            toast.success("Added a deadline");
            return state;
        case "ADD_DEADLINE_ERROR":
            toast.error("Error occured while adding a deadline");
            return state;
        case "REMOVED_DEADLINE":
            toast.warn("Deadline removed");
            return state;
        case "REMOVED_DEADLINE_ERR":
            toast.error("Error occured while removing a deadline");
            return state
        default:
            return state;
    }
}

export default deadlineReducer;