import React from 'react';
import './Header.css';
import logoNetflix from '../../assets/netflix-logo-5.png'
import userNetflix from '../../assets/user.png'

// eslint-disable-next-line import/no-anonymous-default-export
export default ({black}) =>{
    return (
        <header className={black ? 'black' : ''}>
            <div className='header--logo'>
                <a href='/' alt="netflix">
                    <img src={logoNetflix} alt='netflix-logo'/>
                </a>
            </div>
            <div className='header--user'>
                <a href='/'>
                    <img src={userNetflix} alt='user'/>
                </a>
            </div>
        </header>
    );
}