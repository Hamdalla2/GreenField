const initState = {
    test: [
        { username: "ahamd", password: "123"}
    ],
    register: "hide",
    SignIn: "hide",
    showMenu: "hide"
}

const rootReducer = (state = initState, action) => {
    console.log("action====>", action);
    if (action.type === "Show_REGISTER"){
        return {
            ...state,
            register: action.register
        }
    }
    else if (action.type === "Show_SignIn") {
        return {
            ...state,
            SignIn: action.SignIn
        }
    }
    else if (action.type === "Show_MENU") {
        return {
            ...state,
            showMenu: action.showMenu
        }
    }
    return state;
}


export default rootReducer;


