export const Register = (x) => {
    return {
        type: 'Show_REGISTER',
        register: x,
    }
}
export const SignIn = (y) => {
    return {
        type: 'Show_SignIn',
        SignIn: y
    }
}
export const showMenu = (z) => {
    return {
        type: 'Show_MENU',
        showMenu: z
    }
}