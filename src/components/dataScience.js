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
    
    return ( 
        <>
        <div className="flex flex-col justify-between w-1/3 ml-4 text-center data-science">
                <div className="flex flex-row items-center justify-center w-full gap-4 mt-4 ">
                    <h1 className="flex font-bold text-center text-sky-600 desktop-h1 mobile-text-h1">Data Science</h1>
                    <SiAlwaysdata className="text-4xl" />
                </div>
                <div className="w-full border rounded-lg shadow" style={{minWidth: "200px"}}>
                    <div className="flex flex-row items-center justify-center w-full gap-4">
                        <h1 className="text-3xl font-bold">Data Science</h1>
                        <BsBarChart className="text-3xl font-bold text-sky-600"/>
                    </div>
                    <div className="flex flex-row items-center justify-between mt-4 mb-2 ml-4 mr-4">
                        <img src={PythonLogo} alt="" className="skill-logo-large"/>
                        <img src={Matplotlib} alt="" className="skill-logo-large"/>
                        <img src={SeabornLogo} alt="" className="skill-logo-large"/>
                    </div>
                </div>
                <div className="w-full mt-4 border rounded-lg shadow" style={{minWidth: "200px"}}>
                    <div className="flex flex-row items-center justify-center w-full gap-4">
                        <h1 className="text-3xl font-bold">Statistics</h1>
                        <ImSigma className="text-3xl font-bold text-sky-600"/>
                    </div>
                    <div className="flex flex-row items-center justify-between mt-4 mb-4 ml-4 mr-4">
                        <img src={PandasLogo} alt="" className="skill-logo-stats"/>
                        <img src={NumpyLogo} alt="" className="skill-logo-stats"/>
                    </div>
                </div>
                <div className="w-full mt-4 border rounded-lg shadow" style={{minWidth: "200px"}}>
                    <div className="flex flex-row items-center justify-center w-full gap-4">
                        <h1 className="text-3xl font-bold">Machine Learning</h1>
                        <TbRobot className="text-3xl font-bold text-sky-600" />
                    </div>
                    <div className="flex flex-row items-center justify-between mt-4 mb-4 ml-4 mr-4">
                        <img src={Pytorch} alt="" className="skill-logo-large"/>
                        <img src={Tensorflow} alt="" className="skill-logo-large"/>
                    </div>
                </div>
            </div>
        </>
     );
}

export default DataScience;