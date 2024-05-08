import Home from '../components/home';
import About from '../components/about';
import Contact from '../components/contact';
import NavBar from '../components/navbar';
import DataScience from '../components/dataScience';
import WebDevelopment from '../components/webDevelopment';
import Footer from '../components/footer';

function HomePage() {
    return ( 
        <>
            <div>
                <div>
                    <NavBar />
                    <Contact />
                    <Home />
                    <WebDevelopment />
                    <DataScience />
                    <Footer />
                </div>
            </div> 
        </>
     );
}

export default HomePage;