//PLUGINS & DEPS
import React from 'react';
import SEO from "../components/seo";
import Layout from "../layouts/Layout.js";

//COMPONENTS

import TELFORD from "../components/Project_Detail/telford_paints/telford_paints.js";
import Footer from "../components/Footer/Footer.js";

//CSS

//JS Scripts
/* <Link to="/">Go back to the homepage</Link> */
/* don't forget to add links to google fonts for "source sans pro" */

const Project_Rendering_3d = () => ( 
  <>
    <Layout pageTitle="Telford Paints"/>
    <SEO title="Telford Paints" />
    <TELFORD/>
   
    <Footer/>
  </>
)

export default Project_Rendering_3d

