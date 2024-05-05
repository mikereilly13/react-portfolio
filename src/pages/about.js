import About from '../components/about'
import Education from '../components/education';
import NavBar from '../components/navbar';
import ContactForm from '../components/contact-form';
import ResumeDownload from '../components/resume'

function AboutPage() {
    return ( 
        <>
            <div className="">
                <div className="gradient-bg main">
                    <NavBar />
                    <About />
                    <Education />
                    <ContactForm />
                    <ResumeDownload />
                </div>
            </div> 
        </>
     );
}

export default AboutPage;