import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeaderImage from '../../assets/header1.jpeg';
import { Link } from 'react-router-dom';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return(
        <header>
         <div className='container container-lg header-container'>
            <img src={HeaderImage} alt="Header Image" />
            <div className='header-right'>
                <h1>
                    <span>Hi, I'm Radhika Lele</span> <br />
                Web Developer
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus consectetur adipisci rem vero nemo nihil doloribus sapiente amet atque corrupti quibusdam, sequi accusamus quisquam esse incidunt! Veritatis similique debitis eaque?
                   
                </p>
                <Link className='btn' to={'/about'}>
                About Me
                <span>
                    <FontAwesomeIcon icon={faArrowRight} />
                </span>
                </Link>
            </div>
         </div>
        </header>
    )
}

export default Home;