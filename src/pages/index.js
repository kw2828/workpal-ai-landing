import React from "react";
import { Link } from "gatsby";
import addToMailchimp from 'gatsby-plugin-mailchimp'

import Layout from "../components/layout";
import LayoutSection from "../components/layout_section";
import Image from "../components/image";
import SEO from "../components/seo";

import plants from "../images/svgs/women_plants.svg";
import blob from "../images/svgs/workpal_logo.svg";
import WorkpalHero from "./hero"
import Employees from "./employees"
import Employers from "./employers"
import WorkpalFeatures from "./workpal_features"
import WorkpalCTA from "./cta"
import Footer from "../components/footer"


export default class IndexPage extends React.Component {

  render() {
    return (
      <div> 
        <Layout>
          <WorkpalHero />
          <Employees/> 
          <Employers/>
          <WorkpalCTA /> 
        </Layout>
      </div>
    );
  }
}