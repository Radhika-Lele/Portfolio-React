import React from 'react';
import './Theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const getLocalStorageTheme = () => {
    let themes = 'light-theme';
    if(localStorage.getItem('themes')){
        themes = localStorage.getItem('themes');
    }
    return themes;
}

const Theme = () => {
    const [theme, setTheme] = useState(getLocalStorageTheme());

    const toggleTheme = () => {
        if(theme === 'light-theme'){
            setTheme('dark-theme')
        }else{
            setTheme('light-theme')
        }
    }
    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('themes', theme);
    }, [theme])
    return(
        <span className='Bg-toggler' onClick={toggleTheme}>
            <FontAwesomeIcon icon={faMoon} />
        
        </span>
    )
}

export default Theme;