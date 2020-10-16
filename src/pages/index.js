import React from "react";
import { Link } from "gatsby";
import addToMailchimp from 'gatsby-plugin-mailchimp'

import Layout from "../components/layout";
import LayoutSection from "../components/layout_section";
import Image from "../components/image";
import SEO from "../components/seo";

import plants from "../images/svgs/women_plants.svg";
import blob from "../images/svgs/workpal_logo.svg";
import HeroPage from "./hero"
import HermesDesc from "./hermes_one"
import WorkpalFeatures from "./workpal_features"
import HermesWorkers from "./hermes_two"
import HermesMTA from "./hermes_three"
import HermesCTA from "./cta"
import Footer from "../components/footer"


export default class IndexPage extends React.Component {

  render() {
    return (
      <div> 
        <Layout>
          <HeroPage />
          <HermesDesc /> 
        </Layout>
      </div>
    );
  }
}