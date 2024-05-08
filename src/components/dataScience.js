import { SiAlwaysdata } from "react-icons/si";
import { BsBarChart } from "react-icons/bs";
import { ImSigma } from "react-icons/im";
import { TbRobot } from "react-icons/tb";

import PythonLogo from '../images/python-5.svg';
import Matplotlib from '../images/matplotlib-1.svg';
import SeabornLogo from '../images/seaborn-1.svg';
import PandasLogo from '../images/pandas.svg';
import NumpyLogo from '../images/numpy-1.svg';
import Pytorch from '../images/pytorch-2.svg';
import Tensorflow from '../images/tensorflow-2.svg';

function DataScience() {

    const skills = {
        1: {
            title: "Data Science",
            images: [PythonLogo, Matplotlib, SeabornLogo],
            icon: <BsBarChart />
        },
        2: {
            title: "Statistics",
            images: [PandasLogo, NumpyLogo],
            icon: <ImSigma />
        },
        3: {
            title: "Machine Learning",
            images: [ Pytorch, Tensorflow],
            icon: <TbRobot />
        }
    };
    
    return ( 
        <>
        <div className="flex flex-col w-2/5 ml-4 text-center data-science">
            <div className="flex flex-row items-center justify-center w-full gap-4 mt-4 ">
                <h1 className="text-4xl font-bold text-sky-600 ">Data Science & Machine Learning</h1>
                <SiAlwaysdata className="text-4xl"/>
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
            {/* <div>
                <ul>
                    <li>Predictive Analytics</li>
                    <li>Statistics</li>
                    <li>Python</li>
                    <li>Deep Learning</li>
                    <li>Recommendation Systems</li>
                    <li>Pandas</li>
                </ul>
            </div> */}
            
        </div>
        </>
     );
}

export default DataScience;

{/* <>
            <div >
                
                
            </div>

        </> */}