import About from '../components/about'
import Education from '../components/education';
import NavBar from '../components/navbar';
import ContactForm from '../components/contact-form';
import ResumeDownload from '../components/resume'

function AboutPage() {
    return ( 
        <>
            <div className="">
                <div>
                    <NavBar />
                    <About />
                    <Education />
                    <ContactForm />
                </div>
            </div> 
        </>
     );
}

export default AboutPage;