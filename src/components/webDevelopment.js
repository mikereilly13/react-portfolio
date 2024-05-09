import MongoDB from '../images/mongodb-icon-2.svg';
import Express from '../images/express-109.svg';
import ReactLogo from '../images/react-2.svg';
import NodeLogo from '../images/nodejs-icon.svg'
import GithubLogo from '../images/github-icon-1.svg';
import JiraLogo from '../images/jira-1.svg';
import TrelloLogo from '../images/trello-logo.svg';

import AWSLogo from '../images/amazon-web-services.svg';
import GoogleCloud from '../images/google-cloud-3.svg';

import { LuComputer } from "react-icons/lu";
import { FaAws } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { IoIosCloudOutline } from "react-icons/io";
import { SlWrench } from "react-icons/sl";



function WebDevelopment() {
    
    return (
        <>
            <div className="flex flex-col justify-between w-1/3 ml-4 text-center web-dev">
                <div className="flex flex-row items-center justify-center w-full gap-4 mt-4 ">
                    <h1 className="flex font-bold text-center text-sky-600 desktop-h1 mobile-text-h1">Web Development</h1>
                    <LuComputer className="text-4xl"/>
                </div>
                <div className="w-full border rounded-lg shadow" style={{minWidth: "200px"}}>
                    <div className="flex flex-row items-center justify-center w-full gap-4">
                        <h1 className="text-3xl font-bold">Full Stack Apps</h1>
                        <FaDatabase className="text-3xl font-bold text-sky-600"/>
                    </div>
                    <div className="flex flex-row items-center justify-between mt-4 mb-2 ml-4 mr-4">
                        <img src={MongoDB} alt="" className="skill-logo-large"/>
                        <img src={Express} alt="" className="skill-logo-large"/>
                        <img src={ReactLogo} alt="" className="skill-logo-large"/>
                        <img src={NodeLogo} alt="" className="skill-logo-large"/>
                    </div>
                </div>
                <div className="w-full mt-4 border rounded-lg shadow" style={{minWidth: "200px"}}>
                    <div className="flex flex-row items-center justify-center w-full gap-4">
                        <h1 className="text-3xl font-bold">Cloud</h1>
                        <IoIosCloudOutline className="text-3xl font-bold text-sky-600" />
                    </div>
                    <div className="flex flex-row items-center justify-between mt-4 mb-4 ml-4 mr-4">
                        <img src={AWSLogo} alt="" className="skill-logo-medium"/>
                        <img src={GoogleCloud} alt="" className="skill-logo-medium"/>
                    </div>
                </div>
                <div className="w-full mt-4 border rounded-lg shadow" style={{minWidth: "200px"}}>
                    <div className="flex flex-row items-center justify-center w-full gap-4">
                        <h1 className="text-3xl font-bold">Tools</h1>
                        <SlWrench className="text-3xl font-bold text-sky-600" />
                    </div>
                    <div className="flex flex-row items-center justify-between mt-4 mb-4 ml-4 mr-4">
                        <img src={GithubLogo} alt="" className="skill-logo-large"/>
                        <img src={JiraLogo} alt="" className="skill-logo-large"/>
                        <img src={TrelloLogo} alt="" className="skill-logo-large"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WebDevelopment;
