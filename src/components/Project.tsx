import React from "react";
import project01 from '../assets/images/HDB_resale_frontend.png';
// import mock08 from '../assets/images/mock08.png';
import project02 from '../assets/images/Face_detection.png';
// import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/sivakornchong/hdb_project" target="_blank" rel="noreferrer"><img src={project01} className="zoom" alt="thumbnail" width="100%"/></a>
                <h2>HDB Housing Prediction</h2>
                <div className="link-row">
                    <a href="https://github.com/sivakornchong/hdb_project" target="_blank" rel="noreferrer"><h3>Github |</h3></a>
                    <a href="https://huggingface.co/spaces/sivakornchong/HDB_resale_predict" target="_blank" rel="noreferrer"><h3>Frontend</h3></a>
                </div>                
                <p>An end-to-end machine learning pipeline for Singapore housing prediction. Autoiteration pipeline is scheduled on an EC2, with operational monitoring in another MLFlow server, and frontend deployment on HuggingFace.</p>
            </div>
            <div className="project">
                <a href="https://github.com/sivakornchong/fd_widerface_yolov8" target="_blank" rel="noreferrer"><img src={project02} className="zoom" alt="thumbnail" width="100%"/></a>
                <h2>Face Detection and Age Classification</h2>
                <a href="https://github.com/sivakornchong/fd_widerface_yolov8" target="_blank" rel="noreferrer"><h2>Github</h2></a>
                <p>Designed, developed, and launched a local deployment for face detection and age classification based on YOLOV8 + RESNET architecture.</p>
            </div>
            {/* <div className="project">
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><h2>Astro Raiders</h2></a>
                <p>Developed and released a 2D shooting game with C# and Unity. This project is hosted on the Itch.io public marketplace.</p>
            </div>
            <div className="project">
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><h2>Datum: Integrated Learning Platform</h2></a>
                <p>This is an online educational platform that provides high-quality, data science-focused learning resources in the Japanese language. I created the entire platform from scratch using Ruby on Rails.</p>
            </div> */}
        </div>
    </div>
    );
}

export default Project;