import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

//CSS
import HeroCSS from "../Hero/HeroCSS.css";

//graphQL snippet to reduce code repetition within query below
/* export const fixedImage300 = graphql`
fragment fixedImage300 on File {
  childImageSharp {
    fixed(width: 300, height: 190) {
        ...GatsbyImageSharpFixed
    }
  }
}
`; */

//graphQL snippet to reduce code repetition within query below
export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;


const Hero = () => { 
    const data = useStaticQuery(
        graphql`
        query {
            tile1: file(relativePath: { eq: "tile_images/tile1.png" }) {
               ...fluidImage
            }
            tile2: file(relativePath: { eq: "tile_images/tile2.png" }) {
               ...fluidImage
            }
            tile3: file(relativePath: { eq: "tile_images/tile3.png" }) {
               ...fluidImage
            }
            tile4: file(relativePath: { eq: "tile_images/tile4.png" }) {
               ...fluidImage
            }
            tile5: file(relativePath: { eq: "tile_images/tile5.png" }) {
               ...fluidImage
            }
            tile6: file(relativePath: { eq: "tile_images/tile6.png" }) {
               ...fluidImage
            }
            tile7: file(relativePath: { eq: "tile_images/tile7.png" }) {
               ...fluidImage
            }
            tile8: file(relativePath: { eq: "tile_images/tile8.png" }) {
               ...fluidImage
            }
            tile9: file(relativePath: { eq: "tile_images/tile9.png" }) {
               ...fluidImage
            }
            tile10: file(relativePath: { eq: "tile_images/tile10.png" }) {
               ...fluidImage
            }
            tile11: file(relativePath: { eq: "tile_images/tile11.png" }) {
               ...fluidImage
            }
            tile12: file(relativePath: { eq: "tile_images/tile12.png" }) {
               ...fluidImage
            }
            tile13: file(relativePath: { eq: "tile_images/tile13.png" }) {
               ...fluidImage
            }
            tile14: file(relativePath: { eq: "tile_images/tile14.png" }) {
               ...fluidImage
            }
            tile15: file(relativePath: { eq: "tile_images/tile15.png" }) {
               ...fluidImage
            }
            tile16: file(relativePath: { eq: "tile_images/tile16.png" }) {
               ...fluidImage
            }
            tile17: file(relativePath: { eq: "tile_images/tile17.jpg" }) {
               ...fluidImage
            }
            tile18: file(relativePath: { eq: "tile_images/tile18.png" }) {
               ...fluidImage
            }
            tile19: file(relativePath: { eq: "tile_images/tile19.png" }) {
               ...fluidImage
            }
            tile20: file(relativePath: { eq: "tile_images/tile20.png" }) {
               ...fluidImage
            }
            tile21: file(relativePath: { eq: "tile_images/tile21.png" }) {
               ...fluidImage
            }
            tile22a: file(relativePath: { eq: "tile_images/tile22a.png" }) {
               ...fluidImage
            }
            tile23: file(relativePath: { eq: "tile_images/tile23.png" }) {
               ...fluidImage
            }
          }
      `
    );
    return (
    <>
    <div className="hero_background">
            <div className="hero_logo_wrapper slide-in-fwd-center">
            <h1 id="hero_andrew_gilroy" className="focus-in-expand">ANDREW<span id="hero_logo_colon">:</span>GILROY</h1>
            </div>
            <div className="hero_text_wrapper">
                <h1>GRAPHIC DESIGN</h1>
                <h1 id="hero_bullet2">&#9679;</h1>
                <h1>WEB DEVELOPMENT</h1>
                <h1 id="hero_bullet1">&#9679;</h1>
                <h1>3D RENDERING</h1>
            </div>
            <ul className="image_grid">
                <li className="image_grid_item_container"><Img fluid={data.tile1.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile2.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile3.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile4.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile5.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile6.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile7.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile8.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile9.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile10.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile11.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile12.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile13.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile14.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile15.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile16.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile17.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>

                <li className="image_grid_item_container"><Img fluid={data.tile19.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile3.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile14.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile17.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile22a.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile6.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile1.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile5.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile9.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile20.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile19.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile12.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile13.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile23.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile8.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile10.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile2.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>

                <li className="image_grid_item_container"><Img fluid={data.tile8.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile3.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile18.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile11.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile20.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile6.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile7.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile5.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile12.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile16.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile1.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile4.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile13.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile21.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile15.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile9.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile22a.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>

                <li className="image_grid_item_container"><Img fluid={data.tile23.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile22a.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile2.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile19.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile5.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile6.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile7.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile8.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile9.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile10.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile11.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile1.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile13.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile18.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile15.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile19.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile4.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>

                <li className="image_grid_item_container"><Img fluid={data.tile12.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile3.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile14.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile11.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile8.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile6.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile18.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile5.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile17.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile16.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile1.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile4.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile13.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile2.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile15.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile9.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
                <li className="image_grid_item_container"><Img fluid={data.tile22a.childImageSharp.fluid} alt="tiled background" className="image_grid_item tile"/></li>
            </ul>
        </div>
    </>
    )
}

export default Hero