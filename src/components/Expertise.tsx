import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { faUsers, faBrain } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "YOLO",
    "RESNET",
    "RAG",
    "Ollama",
    "HuggingFace",
    "PyTorch",
    "CUDA",
    "LLM", 
    "Langchain",
    "Prompt Engineering"
];

const labelsSecond = [
    "Git",
    "Docker",
    "Streamlit",
    "Dash",
    "React",
    "FastAPI",
    "Websockets",
    "Linux",
    "Pandas",
    "Redis",
    "PostgreSQL",
    "MongoDB",
    "AWS"
];

const labelsThird = [
    "AWS",
    "System Design",
    "Git",
    "Jira",
    "Technical Hiring",
    "Technical Management",
    "Networking",
    "Collaboration",
    "Stakeholder Management"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Summary</h1>
                <p>I'm a machine learning engineer with experience working in TikTok (Singapore) and leading a technical data&ML team at Sixone Labs (Canada). I have 8 years of experience in data and machine learning fields, with 2 years of leadership experience</p>
                <p>Previously, I was a chemical engineer in oil and gas industry. With domain knowledge from non-tech sector, I am passionate about finding ways to extract more values from data with more reliable data engineering and suitable application of AI and machine learning.</p>

            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faBrain} size="3x"/>
                    <h3>ML/AI Development</h3>
                    <p>I have experience in developing end-to-end machine learning projects, from data acquisition, data preprocessing, architectural selection, model training, and MLOps for commercial uses at TikTok and a tech start-up. I specilize in Computer Vision and LLM (RAG).</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Rapid Prototyping</h3>
                    <p> Beyond model development, capable of deliverying MVP software prototype for model deployment, with appropriate frontend, backend, database, and sensor integrations. Proficient in getting the software from 0 to MVP. Comfortable with local, cloud or hybrid solutions</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faUsers} size="3x"/>
                    <h3>Leadership and Domain Knowledge</h3>
                    <p>Led technical teams in two distinct roles—Data Team Lead and Chemical Engineering Team Lead—demonstrating versatility in leadership and team development. Actively involved in hiring and building high-performing teams. Proficient in modern collaboration tools</p>
                    <div className="flex-chips">
                        <span className="chip-title">Skill stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;