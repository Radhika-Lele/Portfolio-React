import React from 'react';
import './About.css';
import HeadingText from '../../components/HeadingText/HeadingText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import CV from '../../assets/CV.pdf';
import Card from '../../UI/Card';
import { experience } from '../../data/Data';
import Tools from '../../components/Tools/Tools';

const About = () => {
    return(
        <>
        <section className='About'>
            <HeadingText
            title={'About'}
            titlePrimary={'Me'} />

            <div className='container about-container'>
                <div className='about-left'>
                    <h3>I'm Radhika</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, quaerat perspiciatis? Consequuntur temporibus corporis totam quos, debitis repudiandae unde? Aliquid dolores quasi tempora neque sed voluptate suscipit, a sapiente voluptatibus?</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, sunt quia at fugit atque tempora? Cupiditate modi, dolore optio itaque quod quisquam laborum! Delectus molestiae dolorum fugit ipsam facere? Eveniet!
                    </p>
                    <a href={CV} download className='btn'> Resume
                        <span><FontAwesomeIcon icon={faDownload} /> </span>
                         </a>
                </div>

                <div className='about-right'>

                    {
                        experience.map(({id, no, title}) => {
                            return(
                                <Card key={id} className={'experience-card'}>
                                  <h1><span>{no}</span></h1>
                                  <p>{title}</p>
                                    
                                </Card>
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