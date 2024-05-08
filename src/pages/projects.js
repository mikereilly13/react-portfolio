import NavBar from '../components/navbar';

function ProjectsPage() {
    return ( 
        <>
            <div>
                <NavBar />
                <div className="mt-2 text-center">
                    <h1 className="text-6xl font-bold">Projects</h1> 
                </div>
                <div className="mt-4 border">
                    <h1 className="ml-2 text-4xl font-bold">Web Development</h1>
                </div> 
                <div className="mt-4 border">
                    <h1 className="ml-2 text-4xl font-bold">Data Science</h1>
                </div>
                <div className="mt-4 border">
                    <h1 className="ml-2 text-4xl font-bold">Workplace Automation</h1>
                </div> 
            </div>
        </>
     );
}

export default ProjectsPage;