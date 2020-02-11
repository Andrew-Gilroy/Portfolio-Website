import React from "react";
/* import styled from "styled-components"; */

//IMAGE IMPORTS

import tile1 from "../../images/tile-images/tile1.jpg";
import tile2 from "../../images/tile-images/tile2.png";
import tile3 from "../../images/tile-images/tile3.png";
import tile4 from "../../images/tile-images/tile4.png";
import tile5 from "../../images/tile-images/tile5.png";
import tile6 from "../../images/tile-images/tile6.png";
import tile7 from "../../images/tile-images/tile7.png";
import tile8 from "../../images/tile-images/tile8.png";
import tile9 from "../../images/tile-images/tile9.png";
import tile10 from "../../images/tile-images/tile10.png";
import tile11 from "../../images/tile-images/tile11.png";
import tile12 from "../../images/tile-images/tile12.png";
import tile13 from "../../images/tile-images/tile13.png";
import tile14 from "../../images/tile-images/tile14.png";
import tile15 from "../../images/tile-images/tile15.png";
import tile16 from "../../images/tile-images/tile16.png";
import tile17 from "../../images/tile-images/tile17.jpg";
import tile18 from "../../images/tile-images/tile18.png";
import tile19 from "../../images/tile-images/tile19.png";
import tile20 from "../../images/tile-images/tile20.png";
import tile21 from "../../images/tile-images/tile21.png";
import tile22 from "../../images/tile-images/tile22.png";
import tile23 from "../../images/tile-images/tile23.png";

//CSS
import HeroCSS from "../Hero/HeroCSS.css";

const Hero = () => ( 
<>
<div className="heroBackground">
        <div className="hero-LogoWrapper slide-in-fwd-center">
           <h1 id="hero-AndrewGilroy" className="focus-in-expand">ANDREW<span id="hero-logo-colon">:</span>GILROY</h1>
        </div>
        <div className="hero-TextWrapper">
            <h1>GRAPHIC DESIGN</h1>
            <h1 id="hero-Bullet2">&#9679;</h1>
            <h1>WEB DEVELOPMENT</h1>
            <h1 id="hero-Bullet1">&#9679;</h1>
            <h1>3D RENDERING</h1>
        </div>
        <ul className="image-grid">
            <li className="image-grid-item-container"><img src={ tile1 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile2 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile3 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile4 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile5 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile6 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile7 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile8 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile9 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile10 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile11 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile12 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile13 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile14 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile15 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile16 } className="image-grid-item game-art" alt="tiled background"></img></li>

            <li className="image-grid-item-container"><img src={ tile17 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile3 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile14 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile18 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile22 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile6 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile1 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile5 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile9 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile20 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile19 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile12 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile13 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile23 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile18 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile10 } className="image-grid-item game-art" alt="tiled background"></img></li>

            <li className="image-grid-item-container"><img src={ tile8 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile3 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile18 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile11 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile20 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile6 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile7 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile5 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile12 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile16 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile1 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile4 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile13 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile21 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile15 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile9 } className="image-grid-item game-art" alt="tiled background"></img></li>

            <li className="image-grid-item-container"><img src={ tile22 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile2 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile3 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile19 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile5 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile6 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile7 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile8 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile9 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile10 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile11 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile1 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile13 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile18 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile15 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile19 } className="image-grid-item game-art" alt="tiled background"></img></li>

            <li className="image-grid-item-container"><img src={ tile12 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile3 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile14 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile11 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile8 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile6 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile18 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile5 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile17 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile16 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile1 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile4 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile13 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile2 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile15 } className="image-grid-item game-art" alt="tiled background"></img></li>
            <li className="image-grid-item-container"><img src={ tile9 } className="image-grid-item game-art" alt="tiled background"></img></li>
        </ul>
    </div>
    
</>
)

export default Hero
