import React, { useState, useEffect} from 'react';
import { setInStorage } from '../utils/storage';
import API from './API';

 
 async  function SignIn() {
    const [username] = useState(username);
    const [password] = useState(password);
    // const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [setHelperText] = useState('');
    // const [loading, isLoading] = useState(true)
    const [ setError ] = useState(false);
 
    
    
          //Post request to backend
        useEffect(() => {
            if(username && password === ''){
                return;
            }
           API.grabUser(username, password)
              .then(res => res.json())
              .then(json => {
                  if (json) {
                      console.log('Grabbing a token');
                      setInStorage('the_main_app', { token: json.token });
                      setError(false);
                      setHelperText('Login Successful');
                  } else {
                      setError(true);
                  setHelperText('Incorrect username or password')
                  }
              }).catch(err => setError(err));
            }, [username, password])
  }
    // signup(cb) {
    //     this.authenticated = false;
    //     console.log('Account Created. Please sign in!')
    //     console.log(cb)
    // }

    // logout(cb) {
    //     this.authenticated = false;
    //     console.log('Logged Out. Authenication set to default')
    //     console.log(cb)
    // }

    // isAuthenticated(){
    //     return this.authenticated;
    // }
 
 export default SignIn;