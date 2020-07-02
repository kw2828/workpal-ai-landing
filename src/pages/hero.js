import React from "react";
import Layout from "../components/layout";
import Image from "../components/image";
import WorkingIcon from '../components/working'
import WorkingMobile from '../components/working-mobile'
import SEO from "../components/seo";
import addToMailchimp from 'gatsby-plugin-mailchimp'
import Hero from './'

import dv_logo from '../images/hermes/dv_logo.png'
import mta_logo from '../images/hermes/mta_logo.png'


export default class HeroPage extends React.Component {
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
          button = <button type="submit" className="submitted" />
        } else {
          button = <button type="submit" className="not_submitted" />
        }
        return (
            <div className="Hero">
              <SEO title="Home" />
              <div className="HeroGroup">
                <div className="mobile-image">
                  <WorkingMobile />
                </div>
                <div className="info">
                  <h1>
                    Work towards what<br /> really matters.
                  </h1>
                  <p className="info-subtext">
                  Workpal is an AI assistant to help busy professionals materialize their goals by managing their time and health. 
                  </p>
                  <form onSubmit={this.handleSubmit} className="form-group">
                        <div className="row">
                          <input
                              type="text"
                              name="phone"
                              placeholder="Phone # 718 222-3333"
                              value={this.state.phone}
                              onChange={this.handleInputChange} />    
                          {button}                
                      </div>
                  </form>
                </div>
                <div className="image">
                  <WorkingIcon/>               
                </div>
              </div>
            </div>
        );
    }
}