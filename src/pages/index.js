//PLUGINS & DEPS
import React from 'react';
import Layout from "../layouts/Layout.js";
import SEO from "../components/seo";
import Helmet from "react-helmet"

//COMPONENTS
//import NavBar from "../components/NavBar/NavBar.js";
import Hero from "../components/Hero/Hero.js";
import About from "../components/About/About.js";
import Projects from "../components/Projects/Projects.js";
import Contact from "../components/Contact/Contact.js";
import Footer from "../components/Footer/Footer.js";

//CSS
import global from "../styles/global.css";

//JS Scripts

//I MIGHT NEED TO ADD HELMET PLUGIN TAGS

/* dont forget to add links to google fonts for "source sans pro" */

const IndexPage = () => (
  
    <>  
        <Layout pageTitle="Home"/>
        <SEO title="Home" />
        <Hero/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
    </>
)

export default IndexPage
