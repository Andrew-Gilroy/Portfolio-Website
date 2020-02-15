
import React from 'react';

//IMAGE IMPORTS
import other_projects_hero_image from "../../../images/other_projects/other_projects_hero.png";
import other_projects_image_1 from "../../../images/other_projects/other_projects_1.png";
import other_projects_image_2 from "../../../images/other_projects/other_projects_2a.jpg";
import other_projects_image_3 from "../../../images/other_projects/other_projects_3.png";
import other_projects_image_4 from "../../../images/other_projects/other_projects_4.png";
import other_projects_image_5 from "../../../images/other_projects/other_projects_5.png";
import other_projects_image_6 from "../../../images/other_projects/other_projects_6.png";
import other_projects_image_7 from "../../../images/other_projects/other_projects_7.png";

//CSS
import project_detailsCSS from "../../project_detail/project_detail.css";

const OTHER = () => { 
    
return (
    <>
        <div className="divider">
            <h2 className="dividerHeading">Other Projects</h2>
        </div>
        <div className="project_hero_image_wrapper">
            <img src={other_projects_hero_image} alt="Other Projects Hero" className="project_hero_image"></img>
        </div>   
        {/*<!--PROJECTS SECTION-->*/}
    <div className="flex_col_wrapper">
        <div class="project_details_flex_col">
            <div class="project_details_text_wrapper ">
                <img src={other_projects_image_1} alt="Maarcfit" class="project_details_image--fullWidth box_shadow"></img>
                <h2 class="project_details_subheading">Maarcfit</h2>
                <hr></hr>
                <p className="project_details_body_text">A young instagram influencer commissioned this logo for his health and fitness brand - Maarcfit. The basis of this logo came from his personal barbell tattoo.</p>
            </div>
            {/*<!--end of text wrapper-->*/}
        </div>{/*<!--END OF ROW-->*/}
            <div class="project_details_flex_col">
            <div class="project_details_text_wrapper ">
                <img src={other_projects_image_2} alt="The Kraken" class="project_details_image--fullWidth box_shadow"></img>
                <h2 class="project_details_subheading">The Kraken</h2>
                <hr></hr>
                <p className="project_details_body_text">My reference for this design came from an old octopus engraving found in a manual of sea monsters. I used illustrator to draw out my own version with some depth effects and lighting to make the design appear 20,000 leagues below the sea.</p>
            </div>
            {/*<!--end of text wrapper-->*/}
        </div>{/*<!--END OF ROW-->*/}
        
            <div class="project_details_flex_col">
            <div class="project_details_text_wrapper ">
                <img src={other_projects_image_4} alt="The People's Republic of Cork" class="project_details_image--fullWidth box_shadow"></img>
                <h2 class="project_details_subheading">The People's Republic of Cork</h2>
                <hr></hr>
                <p className="project_details_body_text">Cork city in Ireland is capital of the "Rebel County" and is often heard of being called the true capital of Ireland. Cork city centre has many tongue in cheek socialist style artworks on display and as an inhabitant I decided to create my own using a personal photo of the dominant Elysian tower found in the city centre.</p>
            </div>
            {/*<!--end of text wrapper-->*/}
        </div>{/*<!--END OF ROW-->*/}
        <div class="project_details_flex_col">
            <div class="project_details_text_wrapper ">
                <img src={other_projects_image_6} alt="Grant Me Safety" class="project_details_image--fullWidth box_shadow"></img>
                <h2 class="project_details_subheading">Grant Me Safety</h2>
                <hr></hr>
                <p className="project_details_body_text">Grant Me Safety is a powerful expose film highlighting the terrible conditions at a refugee camp in Calais, France. I was commissioned to create a poster and web banners for the film premiere at the Royal Concert Hall in Nottingham.</p>
            </div>
            {/*<!--end of text wrapper-->*/}
        </div>{/*<!--END OF ROW-->*/}
        <div class="project_details_flex_col">
            <div class="project_details_text_wrapper ">
                <img src={other_projects_image_5} alt="Frog" class="project_details_image--fullWidth box_shadow"></img>
                <h2 class="project_details_subheading">Frog</h2>
                <hr></hr>
                <p className="project_details_body_text">Originally this design began as a quick sketch that was later turned into a printed T-Shirt. I updated the design to a vector format using illustrator. </p>
            </div>
            {/*<!--end of text wrapper-->*/}
        </div>{/*<!--END OF ROW-->*/}
        <div class="project_details_flex_col">
            <div class="project_details_text_wrapper ">
                <img src={other_projects_image_3} alt="Disco Beat" class="project_details_image--fullWidth box_shadow"></img>
                <h2 class="project_details_subheading">Disco Beat</h2>
                <hr></hr>
                <p className="project_details_body_text">Harking back to the glorious days of the 90's cd cover (looking at you NOW 24!) I recreated the effect using Photoshop's 3D text editor to give the design more visual impact.</p>
            </div>
            {/*<!--end of text wrapper-->*/}
        </div>{/*<!--END OF ROW-->*/}
        
        <div class="project_details_flex_col">
            <div class="project_details_text_wrapper ">
                <img src={other_projects_image_7} alt="Music On The Move" class="project_details_image--fullWidth box_shadow"></img>
                <h2 class="project_details_subheading">Music On The Move</h2>
                <hr></hr>
                <p className="project_details_body_text">For this personal piece I aimed to convey the movement of music as a visualized wave of color. The user has a personal moment contained within her own auditory experience. I used a combination of photoshop and illustrator for this piece. </p>
            </div>
            {/*<!--end of text wrapper-->*/}
        </div>{/*<!--END OF ROW-->*/}
    </div>{/*<!--END OF FLEX_COL WRAPPER-->*/}
    {/*<!--END OF PROJECTS SECTION-->*/}
    </>
    )
}

export default OTHER
