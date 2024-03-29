import * as React from "react"
//import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./resume.scss"


const IndexPage = () => (
  <Layout>
    <SEO title="Dmitri's Resume" />
    {/* <a href="https://www.dmitriatrash.com"> <button className="btn__back--black" id="btn-web">
          Go Back
        </button></a> */}
    <div className="parent">
    
    <div className="header">
    <h1 id="#top">Dmitri Atrash</h1>
    <div className="av-container">
        <StaticImage
        width={200} height={200}
        className="avatar" 
        src="https://res.cloudinary.com/dbphvc4co/image/upload/v1616022345/Personal/3D_avatar-use_this2_ocrrdx.jpg" alt="Dmitri Avatar" />
        <span>Hi! <span role="img" aria-label="hand waving emoji">👋</span> Nice to meet you. My name is Dmitri, and I am a user experience and interface designer based in Loveland, CO. I am passionate about creating inclusive designs that people fall in love with.</span>
    </div>
    <div className="btn-container">
      <a href="https://www.dmitriatrash.com" target="_blank" rel="noreferrer"> <button className="btn__solid ml-0" id="btn-web">
          website
        </button></a>
        <a href="https://www.linkedin.com/in/dmitriatrash/" target="_blank" rel="noreferrer">
      <button className="btn__solid">
        Linkedin
      </button></a>
      <a href="mailto:contact@dmitriatrash.com" target="_blank" rel="noreferrer">
      <button className="btn__outline">
        email
      </button></a>
      <a href="tel:+19702907800">
      <button className="btn__outline">
        call
      </button></a>
    </div>
  </div>
  <div className="skills">
    <div className="small-heading-col">
      <h2>Education</h2>
      <hr className="hr__small" />
      <div className="edu-container">
        <h3 style={{marginBottom: "0.5em"}}>Master of Science</h3>
        <h4 className="degree-title">Web Design and Development</h4>
        <p>My main focus of study was on user experience and user interface research, design, and testing. 
        I learned to design, develop, and deploy websites and web-based applications using best practices
         in information architecture, user experience, and user accessibility. 
        </p>
        <h4>University of Denver // 2017-2019</h4>
        <hr className="hr__large--grey" />
        <h3 style={{marginBottom: "0.5em"}}>Bachelor of Science</h3>
        <h4 className="degree-title">Aviation Technology</h4>
        <p>I learned to work in demanding, high-pressure aerospace environments while remaining detail 
        oriented and focused on providing a high-level of performance. 
        I also, earned multiple FAA flight and instructor ratings in both single and multi-engine aircraft. 
        </p>
        <h4>Metropolitan State University of Denver // 2003-2008</h4>
      </div>
    </div>
    <div className="skills-block">
      <div className="small-heading-col">
        <h2>Skills</h2>
        <hr className="hr__small" style={{marginBottom: "1.5em"}}/>
      </div>
      <ul className="skills-list">
        <li>UI/UX Design</li>
        <li>Interaction Design</li>
        <li>Visual Design</li>
        <li>Wireframing</li>
        <li>Prototyping</li>
        <li>User Testing</li>
        </ul> 
        <br />
        <ul className="skills-list">
        <li>Figma</li>
        <li>Sketch</li>
        <li>Adobe XD</li>
        <li>Adobe Creative Cloud</li>
        <li>Abstract Version Control</li>
        </ul>
        <br />
        <ul className="skills-list">
        <li>HTML</li>
        <li>CSS/SCSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Vue.js</li>
        </ul>
        <br />
        <ul className="skills-list">
        <li>Leadership</li>
        <li>Communication</li>
        <li>Innovation</li>
        <li>Creativity</li>
        <li>Design Thinking</li>
      </ul>
    </div>
  </div>
  <div className="jobs">
    <div className="small-heading">
      <h2>Experience</h2>
      <hr className="hr__small" />
    </div>
    <div className="exp-container">
      <h3>User Experience + Product Designer<span className="italic"> Freelance Designer</span></h3>
      <h4>March 2015 - present | Loveland, CO</h4>
      <ul className="description">
        <li>Design and deliver modern designs and web-based products for clients that help their businesses thrive and connect with their customers.</li>
        <li>Develop websites and platform native digital experiences that are built on various, modern front-end frameworks and content management systems. (CMS), including: React,WordPress, and Shopify.</li>
        <li>Consult and advocate for great UX design, user inclusivity, and web accessibility in a wide variety of business verticals—advising teams on design operations and best practices in Agile processes.</li>
        <li>Create, implement, and maintain design systems and libraries–helping product teams create consistent and versatile patterns to implement in their digital products.</li>
      </ul>
    </div>
    <hr className="hr__large--grey" />
    <div className="exp-container">
      <h3>Digital Business Engineer<span className="italic"> @ Allstate</span></h3>
      <h4>March 2022 - August 2022 | Remote</h4>
      <ul className="description">
        <li>As a Digital Business Engineer and part of the Digital Innovations Team at Allstate, I partner with engineering, UX, and line of business experts to mature agile execution practices to deliver on intended outcomes.</li>
        <li>I leverage outcome-focused metrics to design and roadmap prioritization and product and platform strategy to create products that bridge business requirements and user needs. </li>
        <li>Working with product teams and stakeholders, I work to define and catalog digital blueprints, roadmaps for execution, success criteria, and clear outcomes.</li>
        <li>I support the development of the digital strategy by considering multiple sources of input (e.g., research, test and learn, MVP results, partnerships, etc.)—effectively communicate key findings, messages, and recommendations regarding strategy to all stakeholders.</li>
      </ul>
    </div>
    <hr className="hr__large--grey" />
    <div className="exp-container">
      <h3>Senior UX Engineer<span className="italic"> @ Optum</span></h3>
      <h4>November 2021 - March 2022 | Remote</h4>
      <ul className="description">
        <li>As a Senior User Experience Engineer at Optum, I am responsible for designing user interactions, interfaces, and product features over a large ecosystem of micro products in multi-disciplinary, cross-functional teams.</li>
        <li>I use full-spectrum user experience design, collaborate with stakeholders and users, and advise on design best practices to produce products that are changing the healthcare industry.</li>
        <li>Help mentor junior designers and advocate for inclusive, engaging, human-centered user experiences.  </li>
      </ul>
    </div>
    <hr className="hr__large--grey" />
    <div className="exp-container">
      <h3>Senior UX/UI Consultant<span className="italic"> @ Object Partners, Inc.</span></h3>
      <h4>July 2020 - November 2021 | Omaha, NE</h4>
      <ul className="description">
        <li>As a UX/UI Consultant, I blend digital design and user research to help clients connect with their users, driving their business forward and accomplishing their goals.</li>
        <li>I bridge the divide between stakeholder expectations and user needs to deliver intuitive digital experiences that resonate with people.</li>
        <li>I help clients realize the immense Return on Investment that good design brings to their business.</li>
      </ul>
    </div>
    <hr className="hr__large--grey" />
    <div className="exp-container">
      <h3>UX/UI Designer and Developer<span className="italic"> @ Tigerpaw Software</span></h3>
      <h4>July 2019 - June 2020 | Omaha, NE</h4>
      <ul className="description">
        <li>As the UX/UI Designer and Developer at Tigerpaw, I was responsible for creating and shaping the user experience though unique and captivating user interfaces.</li>
        <li>From initial concept and designs to the end product, I helped to give users a beautiful and intuitive journey in Tigerpaw's software.</li>
        <li>I coordinated with the rest of the Tigerpaw team to turn visions into reality, creating amazing designs, and breathing life into them using the latest Front-End web technologies.</li>
      </ul>
    </div>
    
    <hr className="hr__large--grey" />
    <div className="exp-container">
      <h3>Naval Aviator <span className="italic"> @ U.S. Navy</span></h3>
      <h4>Janurary 2009 - July 2019</h4>
      <ul className="description">
        <li>During my tenure a U.S. Navy Pilot, I had the privilege to fly multi-million dollar aircraft in some of the most demanding environments around the globe.</li>
        <li>As an Aircraft and Mission Commander in both the MQ-4C Triton and the P-8A, I was responsible for the aircraft's safe operation, charged with the aircrew's safety and successful mission accomplishment. </li>
        <li>In my capacity as an officer, I led various essential departments, managing people from diverse backgrounds to help ensure programs were on track and meeting operational requirements.</li>
      </ul>
    </div>
  </div>
</div>
  <a href="#top">
      <button id="btn-top" className="btn__outline">
        Go Back to The Top
      </button></a>
  </Layout>
)

export default IndexPage
