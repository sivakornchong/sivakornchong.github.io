import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import linkedinprofile from '../assets/images/linkedinprofile.jpeg';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={linkedinprofile} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/sivakornchong" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/sivakornchong" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Sivakorn Chongfeungprinya (Oak)</h1>
          <p>Machine Learning Engineer/ Data Team Lead</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/sivakornchong" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/sivakornchong" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;