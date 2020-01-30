import React, {useContext, useState, useEffect} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserGenerate } from '../../Context/UserContext';
import { AuthContext } from '../../Context/AuthContext'
import  SignIn  from '../../utils/auth'
// import 'whatwg-fetch';
// // import auth from './../../utils/auth';
// // import { getFromStorage, setInStorage } from './../../utils/storage';
// import ThemeContextProvider, { ThemeContext } from '../../Context/ThemeContext';
// import './Forms.css';



function Login () {
    const { isAuthorized} = useContext(AuthContext);
    const { user, setUser} = useContext(UserGenerate)
    const [username, setUsername] = useState()
    const [password, setPassword] = useState();
    // const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [helperText] = useState();
    // const [loading, isLoading] = useState(true)
    const [error, setError] = useState(false);

    const handleLogin = (e) => {
        console.log("username is " + username);
        console.log("password is " + password);
        
    }
    

    if(isAuthorized){
        return(
            <div>Hi! {user.firstName}</div>
        )
    }
return (
    <div>
        Stitches & Tape-- Login
       <pre> {JSON.stringify(user, null, 2)}</pre>
				<div className='container'>
					{/* <div style={{ color: theme.ui }}>
						{signInError ? <p>{signInError}</p> : null} */}
						<div className='container'>
							<h2 className='center form-header'>Sign In</h2>
							<form
								onClick={handleLogin()}
								className='border'
								// style={{ backgroundColor: theme.bgc }}
							>
								<ul className='login-form center'>
									<div>
										<li>
											<input
												type='text'
												id='username'
												placeholder='Username'
                                                name='username'
                                                error={error}
												value={username}
												required
												onChange={ e =>
													setUsername(e.target.value)
												}
											/>
											<input
												type='password'
												placeholder='Password'
                                                name='password'
                                                error={error}
                                                value={password}
                                                helperText={helperText}
												onChange={ e =>
												setPassword(e.target.value)
												}
											/>
										</li>
										<br />
										{/* <h4>I forgot my Password!</h4> */}
                                        <button onSubmit={ async () => {const user = await SignIn()
                                                                 setUser(user)}}>Log In</button>	
									</div>
								</ul>
							</form>
						</div>
					</div>

				</div>
        
    
)
}
//         const { isLightTheme, light, dark } = useContext(ThemeContext, ThemeContextProvider);
        
// 		const theme = isLightTheme ? light : dark;

// 		const {
// 			isLoading,
//             token,
//             signInError
// 		} = this.state;

// 		if (isLoading) {
// 			return (
// 				<div>
// 					<p>Loading...</p>
// 				</div>
// 			);
// 		}

// 		if (!token) {
// 			return (
// 				<div className='container'>
// 					<div style={{ color: theme.ui }}>
// 						{signInError ? <p>Error with SignIn</p> : null}
// 						<div className='container'>
// 							<h2 className='center form-header'>Sign In</h2>
// 							<form
// 								onClick={this.handleSubmit}
// 								className='border'
// 								style={{ backgroundColor: theme.bgc }}
// 							>
// 								<ul className='login-form center'>
// 									<div>
// 										<li>
// 											<input
// 												type='text'
// 												id='username'
// 												placeholder='Username'
// 												name='username'
// 												value={this.signInUsername}
// 												required
// 												onChange={
// 													this.onChangeSignInUsername
// 												}
// 											/>
// 											<input
// 												type='password'
// 												placeholder='Password'
// 												name='password'
// 												value={this.signInPassword}
// 												onChange={
// 													this.onChangeSignInPassword
// 												}
// 											/>
// 										</li>
// 										<br />
// 										{/* <h4>I forgot my Password!</h4> */}
// 										<input
// 											className='btn'
// 											type='submit'
// 											onClick={this.onSignIn}
// 											defaultValue='Login'
// 											style={{
// 												backgroundColor: '#5558aa'
// 											}}
// 										/>
// 									</div>
// 								</ul>
// 							</form>
// 						</div>
// 					</div>
// 				</div>
// 			);
// 		}
		
// 		return (
// 			<div>
// 				Welcome!
// 			</div>
// 			// <Redirect
// 			// 	to={{
// 			// 		pathname: '/dashboard',
// 			// 		state: {
// 			// 			from: this.props.location
// 			// 		}
// 			// 	}}
// 			// />
// 		);
//     }
export default Login
    