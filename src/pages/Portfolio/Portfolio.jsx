import React from 'react';
import './Portfolio.css';
import Card from '../../UI/Card';
import HeadingText from '../../components/HeadingText/HeadingText';
import {portfolio} from '../../data/Data';

const Portfolio = () => {
    return(
        <section className='portfolio'>
            <HeadingText title={'Recent'}
             titlePrimary={' Work'} />
             <div className='container portfolio-container'>
                {
                    portfolio.map(({id, img, name, des, github}) => {
                        return(
                            <Card classname={'project'} key={id}>
                                <img src={img} alt="Project Image" />
                                <h3>{name}</h3>
                                <p>{des}</p>
                                <a href={github}>GitHub</a>
                            </Card>
                        )
                    })
                }
             </div>
        </section>
    )
}

export default Portfolio;