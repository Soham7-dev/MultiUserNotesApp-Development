import React from 'react';
import { useCookies } from 'react-cookie';

const Header = () => {

    const [token, setToken, removeToken] = useCookies(['token']);

    const changeTheme = () => {
        const element = document.body;

        if(element.classList === 'dark'){
            element.classList.toggle('root');
        }
        else{
            element.classList.toggle('dark');
        }
    }

    return(
        <div className='app-header'>
            <h1>Notes List</h1>
            <button type='button' onClick={changeTheme} className='theme-btn'>toggle</button>
            <button type='button' onClick={() => {removeToken(['token'])}} className='logout-btn'>Logout</button>
        </div>
    );
}

export default Header;