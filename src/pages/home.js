import Home from '../components/home';
import About from '../components/about';
import Contact from '../components/contact';
import NavBar from '../components/navbar';

function HomePage() {
    return ( 
        <>
            <div>
                <div className="h-screen gradient-bg">
                    <NavBar />
                    <Contact />
                    <Home />
                </div>
            </div> 
        </>
     );
}

export default HomePage;