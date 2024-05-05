import GitHub from '../images/github-icon-1.svg';
import LinkedIn from '../images/linkedin-icon-2.svg';
import {Link} from 'react-router-dom';

function Contact() {
    return ( 
        <>
            <div className="w-1/2 p-12 contact">
                <Link to="https://www.linkedin.com/in/mike-r-547a7b10/" target="new" className="contact-logo">
                    <img src={LinkedIn} alt="" />
                </Link>
                <Link to="https://github.com/mikereilly13" target="new" className="contact-logo">
                    <img src={GitHub} alt="" />
                </Link>
            </div>
        </>
     );
}

export default Contact;