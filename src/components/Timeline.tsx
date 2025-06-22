import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faSchool } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jul 2024 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Sixone Labs</h3>
            <h3 className="vertical-timeline-element-title" style={{ fontStyle: "italic" }}>Machine Learning Engineer/ Data Team Lead</h3>
            <h4 className="vertical-timeline-element-subtitle">Vancouver, Canada</h4>
            <p>
              <em>Sixone Labs is an early-stage startup leveraging machine learning to revolutionize real-time fabric sorting and recycling.</em>
              <ul>
                <li>First data hire; Defined data strategy, cloud infrastructure and technical hiring; scaled team from 1 to 3 within 6 months</li>
                <li>Built ML models (hyperspectral imaging + computer vision) with &lt;5% error using PyTorch.</li>
                <li>Developed full-stack software (FastAPI, Dash, Redis, S3) for real-time fabric sorting; cut latency by 95%.</li>
                <li>Developed RAG-based agent (AWS Bedrock, FastAPI, React, PostgreSQL, Docker); reduced lookup time by 70%.</li>
                <li>Built data pipelines (AWS, Google APIs) for structured outputs and Power BI.</li>
                <li>Translated needs across leadership, R&amp;D, and engineering into data solutions.</li>
              </ul>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jul 2024 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faSchool} />}
          >
            <h3 className="vertical-timeline-element-title">University of British Columbia</h3>
            <h3 className="vertical-timeline-element-title" style={{ fontStyle: "italic" }}>Master in Data Science</h3>
            <h4 className="vertical-timeline-element-subtitle">Vancouver, Canada</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 2022 - Aug 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">TikTok</h3>
            <h3 className="vertical-timeline-element-title" style={{ fontStyle: "italic" }}>ML/AI Specialist</h3>
            <h4 className="vertical-timeline-element-subtitle">Singapore</h4>
            <p>
              <ul>
                <li>Led end-to-end pipelines for foundational CV and multi-modal models in Trust & Safety and Recommendations.</li>
                <li>Improved object detection accuracy by 5% via YOLO backbone upgrades and advanced preprocessing.</li>
                <li>Revamped RCA pipelines using intermediate SQL tables, reducing processing time by 80%.</li>
                <li>Built scalable sampling and annotation pipelines for millions of AI-assisted and human-labeled samples.</li>
                <li>Collaborated with legal and labeling teams to enforce Responsible AI, privacy, and bias mitigation.</li>
                <li>Worked with ML and software engineers to deploy NLP models on AutoML, improving dev workflow efficiency.</li>
              </ul>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Nov 2020 - Jan 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">ExxonMobil Chemicals</h3>
            <h3 className="vertical-timeline-element-title" style={{ fontStyle: "italic" }}>Optimization and Modeling Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Singapore</h4>
            <p>
              <ul>
                <li>Automated model validation workflows using SQL and Python, significantly boosting efficiency.</li>
                <li>Utilized industry-specialized tools such as ASPEN PIMS and ASPEN HYSYS.</li>
                <li>Collaborated with optimizers to validate economic configs for aromatics plant, securing multi-million dollar savings during COVID.</li>
              </ul>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Mar 2019 - Nov 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">ExxonMobil Chemicals</h3>
            <h3 className="vertical-timeline-element-title" style={{ fontStyle: "italic" }}>Technical Team Lead</h3>
            <h4 className="vertical-timeline-element-subtitle">Singapore</h4>
            <p>
              <ul>
                <li>Led a team of 4 process engineers, providing SME support in operations, process safety, capital projects, and systems.</li>
                <li>Drove operational excellence through process troubleshooting and optimization using JMP and SEEQ.</li>
              </ul>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jul 2016 - Mar 2019"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">ExxonMobil Chemicals</h3>
            <h3 className="vertical-timeline-element-title" style={{ fontStyle: "italic" }}>Chemical Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Singapore</h4>
            <p>
              <ul>
                <li>Re-evaluated the disposition of a by-product stream and qualified it for higher-value use.</li>
                <li>Recognized by headquarters for driving a high-impact profitability initiative.</li>
              </ul>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2012 - 2016"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faSchool} />}
          >
            <h3 className="vertical-timeline-element-title">National University of Singapore</h3>
            <h3 className="vertical-timeline-element-title" style={{ fontStyle: "italic" }}>Bachelor of Chemical Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">Singapore</h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;