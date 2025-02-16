import React from 'react';
import './Contact.css';
import HeadingText from '../../components/HeadingText/HeadingText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return(
        <div className="page-container">
        <div className="page-content">
        <section>
            <HeadingText title={'Contact'} titlePrimary={' Me'} />
            <div className='container contact-container'>
                <form action='#'>
                    <input type='text' required placeholder='Your Name' />
                    <input type='email' required placeholder='Your Email' />
                    <input type='number' required placeholder='Your Number' />
                    <textarea name='message' id='message' rows='6' placeholder='Your Message'></textarea>
                    <button type='submit' className='btn'>
                        Send
                        <span>
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </span>
                    </button>
                </form>
            </div>   
        </section>
       </div>
        <footer>
            Made by Radhika
            <br />
            <a>GitHub</a>
            <a>LinkedIn</a>
            <a>Email</a>
        </footer>
        </div>
    )
}

export default Contact;