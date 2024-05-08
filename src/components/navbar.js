import {Link} from 'react-router-dom';
import React, {useState} from 'react';
import ContactForm from './contact-form';
import GitHub from '../images/github-icon-1.svg';
import LinkedIn from '../images/linkedin-icon-2.svg';

function NavBar() {

    const [showContact, setShowContact] = useState(false)
    
    function openMessage() {
        setShowContact(true); // Set showContact state to true when opening
      }
    
      function closeMessage() {
        setShowContact(false); // Set showContact state to false when closing
      }
    
    return ( 
        <>
        <div className="flex flex-row items-center justify-between p-2 mr-4 shadow cursor-pointer navbar gradient-bg">
            <div>
                <h1 className="ml-4 text-4xl font-bold tracking-wide text-slate-200">Mike Reilly</h1>
            </div>
            {/* <div className="w-1/2 p-12 contact">
                <Link to="https://www.linkedin.com/in/mike-r-547a7b10/" target="new" className="contact-logo">
                    <img src={LinkedIn} alt="" />
                </Link>
                <Link to="https://github.com/mikereilly13" target="new" className="contact-logo">
                    <img src={GitHub} alt="" />
                </Link>
            </div> */}
            
            <div className="flex flex-row items-center gap-4 mr-4">
                {/* <Link to="/"><h2 className="tracking-wide text-slate-200">Home</h2></Link>
                <Link to="/about"><h2 className="tracking-wide text-slate-200">About</h2></Link>
                <Link to="/projects"><h2 className="tracking-wide text-slate-200">Projects</h2></Link>
                <Link to="/skills"><h2 className="tracking-wide text-slate-200">Skills</h2></Link> */}
            </div>
            {showContact && <ContactForm />}
        </div>
        </>
     );
}

export default NavBar;