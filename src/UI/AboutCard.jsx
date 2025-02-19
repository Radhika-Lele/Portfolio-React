import React from 'react';
import './AboutCard.css';

const AboutCard = ({ no, title }) => {
    return (
        <div className='about-card'>
            <h1><span>{no}</span></h1>
            <p>{title}</p>
        </div>
    );
};

export default AboutCard;