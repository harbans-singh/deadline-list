import { toast } from "react-toastify";
const initialState = {}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SIGN_IN":{
            // toast("Welcome !", {
            //     position: "top-right",
            //     autoClose: 2500,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: false,
            //     draggable: true,
            //     progress: undefined,
            //     })
            return state;
        }
        case "SIGN_IN_ERR":{
            toast.error("Enter valid details !", {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                })
            return state;
        }
        case "ACTIVATE_REQUIRED":{
            toast.error("Activate your account first !", {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                })
            return state;
        }
        case "SIGN_OUT":{
            // toast("You are logged out !", {
            //     position: "top-right",
            //     autoClose: 2500,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: false,
            //     draggable: true,
            //     progress: undefined,
            //     })
            return state;
        }
        case "SIGN_UP": {
            toast("Your Account has been created. Check your email to activate your account first.", {
                position: "top-center",
                autoClose: 6000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                })
            return state;
        }
        case "SIGN_UP_ERROR": {
            toast.error("Sign up error !", {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                })
            return state;
        }
        case "FORGOT_PASSWORD": {
            toast("Check your email to reset your password !", {
                position: "top-right",
                autoClose: 6000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                })
            return state;
        }
        case "FORGOT_PASSWORD_ERROR": {
            toast.error("Enter valid email !", {
                position: "top-right",
                autoClose: 6000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                })
            return state;
        }
        default:{
            return state;
        }
    }
};

export default authReducer;