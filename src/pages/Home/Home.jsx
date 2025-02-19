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
                I am a Frontend Developer and Email Specialist based in Toronto, Canada, with over a year of experience in software development.
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