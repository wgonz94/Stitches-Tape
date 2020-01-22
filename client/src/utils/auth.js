// import {getFromStorage} from "./storage"
// const obj = getFromStorage('the_main_app')
// const {token} = obj;
 class Auth{
    authenticate() {
        this.authenticated = false
    }

    signedIn = (cb) => {
        
        this.authenticated = true;
        cb()

    }
    signup(cb) {
        this.authenticated = false;
        cb()
    }

    logout(cb) {
        this.authenticated = false;
        cb()
    }

    isAuthenticated(){
        return this.authenticated;
    }
 }

 export default new Auth()