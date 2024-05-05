function ResumeDownload() {

    
    
    return ( 
        <>
        <div className="resume">
        <a href="data:application/pdf;base64,base64_encoded_data" download="mike_reilly_resume_4-21-24.pdf">Download PDF</a>
            <a href="https://docs.google.com/document/d/1DEGXfvtC7ZJtd9cIwCWEDGXfbvG6kFbaN9bVmwWI1JY/edit?usp=drive_link" download="">Download PDF</a>
            <button className="p-2 text-orange-400 rounded-lg shadow bg-slate-500">DOWNLOAD RESUME</button>
        </div>
        </>
     );
}

export default ResumeDownload;