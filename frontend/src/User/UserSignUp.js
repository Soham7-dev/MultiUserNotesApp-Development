import './User.css';
import React, {useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import { ErrorMessage2, ErrorMessage3, ErrorMessage4 } from "./ErrorMessage";

const UserSignUp = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [conpassword, setconPassword] = useState("");
    const [isError2, setisError2] = useState(false);
    const [isError3, setisError3] = useState(false);
    const [isError4, setisError4] = useState(false);

    const navigate = useNavigate();

    const checkPassword = () => {
        let upper = false;
        let lower = false;
        let digit = false;
        let special = false;

        for(let i = 0; i < password.length; i++){
            if(password.charAt(i).charCodeAt(0) >= 65 && password.charAt(i).charCodeAt(0) <= 90)
                upper = true;
            if(password.charAt(i).charCodeAt(0) >= 97 && password.charAt(i).charCodeAt(0) <= 122){
                lower = true;
            }
            if(password.charAt(i).charCodeAt(0) >= 48 && password.charAt(i).charCodeAt(0) <= 57){
                digit = true;
            }
            if(
                (password.charAt(i).charCodeAt(0) >= 32 && password.charAt(i).charCodeAt(0) <= 47)
                || (password.charAt(i).charCodeAt(0) >= 58 && password.charAt(i).charCodeAt(0) <= 64)
                || (password.charAt(i).charCodeAt(0) >= 91 && password.charAt(i).charCodeAt(0) <= 96)
                || (password.charAt(i).charCodeAt(0) >= 123 && password.charAt(i).charCodeAt(0) <= 126)
            ){
                special = true;
            }
        }

        console.log(upper, lower, digit, special);

        if(upper && lower && digit && special && password.length >= 8)
            return true;
        else
            return false;
    }

    const signupUser = async () => {

        if(password !== conpassword){
            setisError2(true);
            return;
        }

        if(!checkPassword()){
            setisError4(true);
            return;
        }

        const response = await fetch('http://localhost:8000/api/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
        })

        const data = await response.json();

        if(Array.isArray(data.username)){
            setisError3(true);
            return;
        }

        console.log(data);

        console.log(data.username);

        navigate(-1);
    }

    return(
        <div className="center">
            <h1>SignUp</h1>

            <form onSubmit={(e) => {e.preventDefault(); signupUser();}}>
                <div className="txt_field">
                    <label htmlFor='username'>Username</label>
                    <input type='text' id='username' required="required" value={username} onChange={(e) => {setUsername(e.target.value);}}></input>
                </div>

                <div className="txt_field">
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' required="required" value={password} onChange={(e) => {setPassword(e.target.value); }}></input>
                </div>

                <div className="txt_field">
                    <label htmlFor="conpassword">Confirm Password</label>
                    <input type='password' id='conpassword' required="required" value={conpassword} onChange={(e) => {setconPassword(e.target.value);}}></input>
                </div>

                <button type='submit' className="signupbtn">Sign Up</button>

                {isError2? <ErrorMessage2/> : null}
                {isError3? <ErrorMessage3/> : null}
                {isError4? <ErrorMessage4/> : null}

                <div className='signup_link'>
                        <h5>Already have an Account?, Please <Link to='/'>Login</Link></h5>
                </div>
            </form>
        </div>
    )
}

export default UserSignUp;