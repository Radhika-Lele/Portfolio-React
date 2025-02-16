import React from 'react';
import './Contact.css';
import HeadingText from '../../components/HeadingText/HeadingText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2'

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "2e64a8c1-a6fe-440a-89b3-cbaa59c2bc31");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Sucess!",
                text: "Message sent successfully!",
                icon: "success"
              });
        }
      };
    
    return(
        <div className="page-container">
        <div className="page-content">
        <section>
            <HeadingText title={'Contact'} titlePrimary={' Me'} />
            <div className='container contact-container'>
                <form onSubmit={onSubmit}>
                    <input type='text' name='name' required placeholder='Your Name' />
                    <input type='email' name='email' required placeholder='Your Email' />
                    <textarea required name='message' id='message' rows='6' placeholder='Your Message'></textarea>
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
            <a href='https://github.com/Radhika-Lele'  target="_blank">GitHub</a>
            <a href='https://www.linkedin.com/in/radhika-lele'  target="_blank">LinkedIn</a>
            <a href="mailto:radhika.khaparde@gmail.com">Email</a>
        </footer>
        </div>
    )
}

export default Contact;