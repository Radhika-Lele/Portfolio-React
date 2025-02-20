import React from 'react';
import './Portfolio.css';
import Card from '../../UI/Card';
import HeadingText from '../../components/HeadingText/HeadingText';
import {portfolio} from '../../data/Data';
import { useState } from 'react';

const Portfolio = () => {
    const [activeTab, setActiveTab] = useState('web');

    // Filter projects based on tab selection
    const webProjects = portfolio.filter(project => !project.name.includes('Email Template'));
    const emailTemplates = portfolio.filter(project => project.name.includes('Email Template'));

    return(
        <section className='portfolio'>
            <HeadingText title={'Recent'}
             titlePrimary={' Work'} />
               <div className='portfolio-tabs'>
                <button 
                    className={`tab-button ${activeTab === 'web' ? 'active' : ''}`}
                    onClick={() => setActiveTab('web')}
                >
                    Web Projects
                </button>
                <button 
                    className={`tab-button ${activeTab === 'email' ? 'active' : ''}`}
                    onClick={() => setActiveTab('email')}
                >
                    Email Templates
                </button>
            </div>

             <div className='container portfolio-container'>
                {
                    (activeTab === 'web' ? webProjects : emailTemplates).map(({id, img, name, des, github, live}) => {
                        return(
                            <Card classname={'project'} key={id}>
                                <a href={live} target='_blank'><img src={img} alt="Project Image" /></a>
                                <a href={live} target='_blank'><h3>{name}</h3></a>
                                {/* <p>{des}</p> */}
                                <a href={github} target='_blank'>GitHub</a>
                            </Card>
                        )
                    })
                }
             </div>
        </section>
    )
}

export default Portfolio;