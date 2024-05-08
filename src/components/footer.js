import { Link } from 'react-router-dom';
import GithubLogo from '../images/github-icon-1.svg';
import LinkedinLogo from '../images/linkedin-icon-2.svg';

function Footer() {
    return ( 
        <>
            <div className=" footer">
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-col ml-4 text-white">
                        <h2 className="">tel: 802-688-4445</h2>
                        <h2>michael.reilly13@gmail.com</h2>
                        
                    </div>
                    <div className="flex flex-row items-center justify-between mt-2">
                       <div><Link target="new" to="https://github.com/mikereilly13"><img src={GithubLogo} alt="HTML5 Logo" className="github-logo" /></Link></div> 
                       <div><Link target="new" to="https://www.linkedin.com/in/mike-r-547a7b10/"><img src={LinkedinLogo} alt="HTML5 Logo" className=" linkedin-logo" /></Link></div> 
                       {/* <button className="p-4 mr-4 text-white rounded-lg shadow bg-sky-500 hover:bg-blue-600 focus:ring focus:ring-sky-300">GET IN TOUCH</button> */}
                    </div>
                   
                </div>
                
            </div>
        </>
     );
}

export default Footer;