import React from 'react';
import './About.css';
import HeadingText from '../../components/HeadingText/HeadingText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import CV from '../../assets/CV.pdf';
import Card from '../../UI/Card';
import { experience } from '../../data/Data';
import Tools from '../../components/Tools/Tools';
import AboutCard from '../../UI/AboutCard';

const About = () => {
    return(
        <>
        <section className='About'>
            <HeadingText
            title={'About'}
            titlePrimary={' Me'} />

            <div className='container about-container'>
                <div className='about-left'>
                    <h3>I'm Radhika</h3>
                    <p>As a Frontend Developer, I am passionate about building web applications using React, JavaScript, and RESTful APIs. Over the past year, I have collaborated in agile teams to develop high-performance web applications, transforming Figma designs into fully responsive and interactive user interfaces. My problem-solving skills allow me to debug efficiently, improve performance, and streamline development workflows.</p>
                    <p>
                    Additionally, I specialize in building and testing email templates across different platforms, ensuring seamless rendering and compatibility. I create responsive, visually engaging, and accessible email designs that enhance user engagement and brand consistency. My experience includes testing emails across various clients like Gmail, Outlook, and Apple Mail to identify and resolve rendering issues, ensuring optimal performance across all devices.
                    </p>
                    <a href={CV} download className='btn'> Resume
                        <span><FontAwesomeIcon icon={faDownload} /> </span>
                         </a>
                </div>

                <div className='about-right'>

                    {
                        experience.map(({id, no, title}) => {
                            return(
                                <AboutCard key={id} no={no} title={title} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
        <Tools />
        </>
    )
}

export default About;

