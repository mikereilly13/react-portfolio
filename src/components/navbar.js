import {Link} from 'react-router-dom';
import React, {useState} from 'react';
import ContactForm from './contact-form';

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
        <div className="flex flex-row items-center justify-between p-4 mr-4 cursor-pointer">
            <div>
                <h1 className="ml-2 text-4xl font-bold tracking-wide text-slate-200">Mike Reilly</h1>
            </div>
            <button onClick={openMessage} className="p-2 text-white bg-blue-600 rounded-lg shadow hover:bg-sky-500 focus:ring focus:ring-sky-300">GET IN TOUCH</button>
            <div className="flex flex-row gap-4 mr-4">
                <h2 className="tracking-wide text-slate-200">Home</h2>
                <Link to="/about"><h2 className="tracking-wide text-slate-200">About</h2></Link>
                <Link to="/projects"><h2 className="tracking-wide text-slate-200">Projects</h2></Link>
                <Link to="/skills"><h2 className="tracking-wide text-slate-200">Skills</h2></Link>
            </div>
            {showContact && <ContactForm />}
        </div>
        </>
     );
}

export default NavBar;