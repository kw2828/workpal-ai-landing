import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import screenshot from '../images/employees.png'
import get_started from '../images/hermes/get_started.png'
import hermes_logo from '../images/hermes/hermes_logo.png'

const HermesDesc = () => (
    <div className="SectionGray">
      <div className="SectionGroup">
        <div>
          <button className="user-segment">For Employees</button>
          <img className="screenshot" src={screenshot} />     
        </div>
        <div className="section-info">
              <h1>Meet your AI companion and counselor. Manage your time, stress, and weekly goals more intelligently with a partner.
  </h1>
              <p>Employees get access to a 24/7, unbiased, private, and anonymous work companion which gives them access to tools, world-class methods, and content for specific needs. Connect 1:1 with team members weekly</p>
              <button className="get_started" />        
        </div>
      </div>                     
    </div>
)

export default HermesDesc
