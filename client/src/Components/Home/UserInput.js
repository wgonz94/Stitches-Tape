import React from "react";
import SignUp from "../../pages/Account/SignUp";
import SignIn from "../../pages/Account/SignIn";

const UserInput = () => {
  return (
    <div>
      <section>
        <div className='row'>
          <div className='col s12 m6'>
            <SignIn />
          </div>
          <div className='col s12 m6'>
            <SignUp />
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserInput;
