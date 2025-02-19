import HeadingText from '../HeadingText/HeadingText';
import './Tools.css';
import { tools } from '../../data/Data';

const Tools = () => {
    return(
        <section className='tools'>
        <HeadingText
         title={'My'}
         titlePrimary={' Toolkit'}
        />
        <div className="container tools-container">
                {tools.map(({ id, img, name }) => {
                    return (
                        <div key={id} className="tool-item">
                            <img src={img} alt={name} />
                            {name && <p>{name}</p>}  
                        </div>
                    );
                })}
            </div>
        </section>
    )
}

export default Tools;