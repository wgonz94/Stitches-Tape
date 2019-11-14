// Initialize SDK for Auth0
let auth0 = null;

// Grab info from Auth0_config.json

const fetchAuthConfig = () => fetch("/auth_config.json");

// download the configuration file and initialize the auth0 variable
// populate the in-memory cache with a valid access token 
// user profile information if someone has already authenticated before 
// that session is still valid

const updateUI = async () => {
  const isAuthenticated = await auth0.isAuthenticated();

  document.getElementById("btn-logout").disabled = !isAuthenticated;
  document.getElementById("btn-login").disabled = isAuthenticated;
};

//  initialize the application

window.onload = async () => {
  await configureClient();

  // NEW - update the UI state
  updateUI();
}

//Evaluate the authentication state
const updateUI = async () => {
  const isAuthenticated = await auth0.isAuthenticated();

  document.getElementById("btn-logout").disabled = !isAuthenticated;
  document.getElementById("btn-login").disabled = isAuthenticated;
};

// Login 

const login = async () => {
  await auth0.loginWithRedirect({
    redirect_uri: window.location.origin
  });
};

// Logout

const logout = () => {
  auth0.logout({
    returnTo: window.location.origin
  });
};
