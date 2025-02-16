import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {navLinks} from '../../data/Data';
import { useState } from 'react';

const Nav = () => {
    const [showmenu, setShowmenu] = useState(false);

    const MenuHandler = () =>{
        setShowmenu(!showmenu);
    }

    const closeMenu = () => {
        setShowmenu(false);
    };

    return(
        <nav>
            <ul className={`${ showmenu ? 'navlinks navlinks-show' : 'navlinks'}`}>
                {
                    navLinks.map(({id, name, path, icon}) => {
                        return(
                            <li className='nav-item' key={id}>
                                <NavLink 
                                onClick={closeMenu} 
                                to={path} 
                                className={({isActive}) => isActive ? 'nav-link navlinksActive' : 'nav-link' }
                                
                                >
                                    <span><FontAwesomeIcon icon={icon} /></span>
                                    <h3>
                                        {name}
                                    </h3>
                                </NavLink>
                            </li>
                        )
                    })
                }
            </ul>
            <div className={`${showmenu ? "nav-toggle nav-close" : "nav-toggle"}`} onClick={MenuHandler}>
                <span></span>
                <span></span>
                <span></span>
            </div>  
        </nav>
    )
}

export default Nav;