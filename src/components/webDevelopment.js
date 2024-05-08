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
    const skills = {
        1: {
            title: "Full Stack Software Applications",
            images: [MongoDB, Express, ReactLogo, NodeLogo],
            icon: <FaDatabase />
        },
        2: {
            title: "Cloud Architecture",
            images: [AWSLogo, GoogleCloud],
            icon: <IoIosCloudOutline />
        },
        3: {
            title: "Tools",
            images: [GithubLogo, JiraLogo, TrelloLogo],
            icon: <SlWrench />
        }
    };

    return (
        <>
            <div className="flex flex-col w-1/3 ml-4 text-center web-dev">
                <div className="flex flex-row items-center justify-center w-full gap-4 mt-4 ">
                    <h1 className="text-4xl font-bold text-center text-sky-600">Web Development</h1>
                    <LuComputer className="text-4xl" />
                </div>
                {Object.values(skills).map((skill, i) => (
                <div className="flex flex-col justify-center w-full gap-4 p-1 mt-4 border rounded-lg shadow">
                    <div className="flex flex-row items-center justify-center gap-4">
                        <h1 className="text-2xl font-bold text-sky-600">{skill.title}</h1>
                        {skill.icon && <h2>{skill.icon}</h2>}
                    </div>
                    <div className="flex flex-row items-center justify-between m-4">
                    {skill.images && skill.images.map((image, j) => (
                                <img key={j} src={image} alt="" className="skill-logo" />
                            ))}
                    </div>
                </div>
                
                ))}
            </div>

        </>
    );
}

export default WebDevelopment;
