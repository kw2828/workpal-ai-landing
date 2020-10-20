import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import screenshot from '../images/happy_employee.png'
import get_started from '../images/hermes/get_started.png'
import health_prof from '../images/hermes/healthprof.png'

export default class WorkpalCTA extends React.Component {
    state = {
        phone: "",
        submitted: false,
    };
    
    handleInputChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
    };
    
    validatePhone(phone) {
        var re = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
        return re.test(String(phone).toLowerCase());
    }
    
    handleSubmit = event => {
        event.preventDefault();

        const phone = this.state.phone
        const validPhone = this.validatePhone(phone)
        if (validPhone === true) {
          // addToMailchimp(phone)
          this.setState({ submitted: true })
        } else {
          alert(`Please enter a valid phone number! ${phone}`);
        }
    };

    render() {
        const hasSubmitted = this.state.submitted;
        let button;
    
        if (hasSubmitted) {
            button = <button type="submit" className="submitted"> Submitted </button>
        } else {
            button = <button type="submit" className="not_submitted">Sign Up</button>
        }
        return (
            <div>
                <div className="CTAGroup">
                    <div className="cta-info">
                        <h2 className="cta-text">Sign up for early access</h2>
                        <form onSubmit={this.handleSubmit} className="form-group">
                            <div className="row">
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="Request early access"
                                    value={this.state.phone}
                                    onChange={this.handleInputChange} />    
                                {button}
                            </div>
                        </form>
                        <img className="screenshot" src={screenshot} />  
                        <p>© Workpal 2020</p>
                        <br />    
                        <br />              
                        <br />              
                        <br /> 
                    </div>
                </div>                     
            </div>
        )
    }
}
