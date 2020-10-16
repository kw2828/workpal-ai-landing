import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import screenshot from '../images/analytics.png'
import get_started from '../images/hermes/get_started.png'
import hermes_logo from '../images/hermes/hermes_logo.png'

const Employers = () => (
  <div className="SectionWhite">
    <div className="SectionGroup">
      <div class-info="info-wrapper">
        <button className="user-segment">For Employers</button>
        <br />
        <br />
        <div className="section-info-employers">
          <div>
            <h1 style={{ maxWidth: 550 }}>Drive visible change with a live pulse on employee health, emotional wellbeing, personal growth, and holistic goals. </h1>
            <p style={{ maxWidth: 550 }}>Strengthen relationships and build bonds across departments and distances. Improve engagement numbers across the board and understand the needs of your team and community. </p>
            <a style={{ maxWidth: 550 }}>Request early access →</a> 
          </div>  
      </div>    
      </div>
      <img className="screenshot" src={screenshot} />     
    </div>                     
  </div>
)

export default Employers
