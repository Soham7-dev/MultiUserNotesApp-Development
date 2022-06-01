import './User.css';
import React , {useState, useEffect} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import {ErrorMessage1} from './ErrorMessage';

const UserLogin = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken, removeToken] = useCookies(['token']);
    const navigate = useNavigate();

    useEffect(() => {
        if(token['token'] && token['token'] !== 'undefined'){
            navigate('/notes');
        }
        else{
            removeErrorMessage();
        }
    }, [token])

    const loginUser = async () => {

        const response =  await fetch('http://localhost:8000/auth/', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify({username, password})
        })

        const data = await response.json();

        setToken('token', data.token);
    }

    const removeErrorMessage = () => {
        if(token['token'] === 'undefined'){
            setTimeout(() => {
                removeToken(['token']);
            }, 5000);
        }
    }

    return(
        <div className='center'>
            <h1>Login</h1> 
            
            <form onSubmit={(e) => {e.preventDefault(); loginUser();}}>
                <div className='txt_field'>
                    <label htmlFor='username'>Username</label>
                    <input type='text' id='username' required="required" value={username} onChange={(e) => {setUsername(e.target.value);}}></input>
                </div>

                <div className='txt_field'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' required="required" value={password} onChange={(e) => {setPassword(e.target.value); }}></input>
                </div>

                <button type='submit' className='loginbtn'>Login</button>

                {username && password && token['token'] === 'undefined'? <ErrorMessage1/>: null}

                <div className='signup_link'>
                    <h5>If You don't have an account, Please <Link to='/register/'>SignUp</Link></h5>
                </div>
            </form>
        </div>
    );
};

export default UserLogin