//PLUGINS & DEPS
import React from 'react';
import SEO from "../components/seo";
import Layout from "../layouts/Layout.js";

//COMPONENTS

import OTHER from "../components/Project_Detail/other_projects/other_projects.js";
import Footer from "../components/Footer/Footer.js";

//CSS

//JS Scripts
/* <Link to="/">Go back to the homepage</Link> */
/* don't forget to add links to google fonts for "source sans pro" */

const Project_Other_Projects = () => ( 
  <>
    <Layout pageTitle="Other Projects"/>
    <SEO title="Other Projects" />
    <OTHER/>
   
    <Footer/>
  </>
)

export default Project_Other_Projects

