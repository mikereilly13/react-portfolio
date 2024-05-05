import MIT from '../images/MIT_logo.svg';
import UTAustin from '../images/texas-university.svg';
import ABGBrew from '../images/abgbrew-logo.png';
import TENN from '../images/tennessee-vols-4.svg';

function Education() {
    return ( 
        <>
            <div className="education">
                <h1 className="text-4xl font-bold text-white">Education</h1>
                <div className="flex flex-row items-center mt-4">
                    <img src={MIT} alt="" className="education-logo"/>
                    <div className="ml-4 flex-column">
                        <h2>Data Science and Machine Learning Certificate</h2>
                        <h2>Massachusetts Institute of Technology</h2>
                        <h2>July, 2024</h2>
                    </div>
                </div>
                <div className="flex flex-row items-center mt-4">
                    <img src={UTAustin} alt=""  className="education-logo"/>
                    <div className="ml-4 flex-column">
                        <h2>MERN Cloud Software Engineering Certificate</h2>
                        <h2>University of Texas-Austin</h2>
                        <h2>March, 2024</h2>
                    </div>
                </div>
                <div className="flex flex-row items-center mt-4">
                    <img src={ABGBrew} alt=""  className="education-logo"/>
                    <div className="ml-4 flex-column">
                        <h2>Craft Brewer's Apprenticeship</h2>
                        <h2>American Brewer's Guild</h2>
                        <h2>November, 2015</h2>
                    </div>
                </div>
                <div className="flex flex-row items-center mt-4">
                    <img src={TENN} alt=""  className="education-logo"/>
                    <div className="ml-4 flex-column">
                        <h2>Bachelor's, Psychology</h2>
                        <h2>University of Tennessee-Knoxville</h2>
                        <h2>November, 2015</h2>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Education;