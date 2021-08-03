import { toast } from "react-toastify";

const authReducer = (state = {}, action) => {
    switch(action.type) {
        case "SIGN_IN":{
            toast("Welcome Back!")
            return state;
        }
        case "SIGN_IN_ERR":{
            toast.error("Sign In Error")
            return state;
        }
        case "SIGN_OUT":{
            toast("You are Signed Out")
            return state;
        }
        case "SIGN_UP": {
            toast("Signed Up Successfully")
            return state;
        }
        case "SIGN_UP_ERROR": {
            toast.error("Sign Up Error")
            return state;
        }
        default:{
            return state;
        }
    }
};

export default authReducer;