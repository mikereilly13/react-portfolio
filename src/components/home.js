import React from 'react';
import HTML5 from '../images/html-1.svg';
import CSS3 from '../images/css-3.svg';
import JSLogo from '../images/javascript-1.svg';
import MongoLogo from '../images/mongodb-icon-2.svg';
import ExpressLogo from '../images/express-109.svg';
import ReactLogo from '../images/react-2.svg';
import NodeLogo from '../images/nodejs.svg';
import { Link } from 'react-router-dom';

function Home() {
    return ( 
        <>
            <div className="navbar ">
                <div className="flex flex-row items-center justify-between p-4 mr-4 cursor-pointer">
                    <div>
                        <h1 className="ml-2 text-4xl font-bold tracking-wide text-slate-200">Mike Reilly</h1>
                    </div>
                    <div className="flex flex-row gap-4 mr-4">
                        <h2 className="tracking-wide text-slate-200">Home</h2>
                        <Link to="/about"><h2 className="tracking-wide text-slate-200">About</h2></Link>
                        <Link to="/projects"><h2 className="tracking-wide text-slate-200">Projects</h2></Link>
                        <Link to="/skills"><h2 className="tracking-wide text-slate-200">Skills</h2></Link>
                    </div>
                </div>
                <div className="flex-row mt-24">
                    <h1 className="ml-2 text-2xl font-bold tracking-wide text-white">Hi, I'm Mike Reilly</h1>
                    <h1 className="ml-2 text-2xl font-bold tracking-wide text-white">I build web and data science solutions</h1>
                </div>
                <div className="justify-between mt-40 skill-row">
                    <img src={HTML5} alt="HTML5 Logo" className="skill-logo" />
                    <img src={CSS3} alt="CSS3 Logo" className="skill-logo" />
                    <img src={JSLogo} alt="Javascript Logo" className="skill-logo" />
                    <img src={MongoLogo} alt="MongoDB Logo" className="skill-logo" />
                    <img src={ExpressLogo} alt="Express Logo" className="p-2 bg-white skill-logo" />
                    <img src={ReactLogo} alt="React Logo" className="skill-logo" />
                         
                </div>
            </div>
        </>

     );
}

export default Home;