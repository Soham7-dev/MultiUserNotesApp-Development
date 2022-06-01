import React from 'react';

export const ErrorMessage1 = () => {

    return(
        <div>
            <h5 style={{color: 'red', textAlign: 'center'}}>Please Enter the Correct Username and Password</h5>
        </div>
    )
}

export const ErrorMessage2 = () => {

    return(
        <div>
            <h5 style={{color: 'red', textAlign: 'center'}}>Password did not match</h5>
        </div>
    )
}

export const ErrorMessage3 = () => {

    return(
        <div>
            <h5 style={{color: 'red', textAlign: 'center'}}>A User with that Username already exists, Choose a different Username</h5>
        </div>
    )
}

export const ErrorMessage4 = () => {
    
    return(
        <div>
            <h6 style={{color: 'red', textAlign: 'center'}}>Password should contain atleast 8 characters, 1 digit, 1 uppercase, 1 lowercase, 1 special character</h6>
        </div>
    )
}