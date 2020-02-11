
import React from 'react';


//IMAGE IMPORTS
import telford_hero_image from "../../../images/telford_paints/telford_hero.png";
import telford_logo from "../../../images/svg/telford_paints_1.svg";
import telford_mockup from "../../../images/telford_paints/telford_mockup.png";


//CSS
import project_detailsCSS from "../../project_detail/project_detail.css";

const TELFORD = () => { 
    
return (
    <>
        <div className="divider">
            <h2 className="dividerHeading">Telford Paints</h2>
        </div>
        <div className="project_hero_image_wrapper">
            <img src={telford_hero_image} alt="Telford Hero" className="project_hero_image"></img>
        </div>   
        {/*<!--PROJECTS SECTION-->*/}
    <div className="project_details_flex_row">
        <div className="project_details_text_wrapper ">
            <h2 className="project_details_subheading">Initial Brief</h2>
            <hr></hr>
            <p className="project_details_body_text">The Telford paints design project was created in response to an online challenge that required the designer to created a set of branded marketing materials for a paint firm.
            </p>
        </div>
        {/*<!--end of text wrapper-->*/}
    </div>
    {/*<!--end of row-->*/}
        <div className="project_details_flex_row">
        <div className="project_details_text_wrapper ">
            <h2 className="project_details_subheading">Logo Design</h2>
            <hr></hr>
            <p className="project_details_body_text">
               
                For this particular logo I decided upon a central paintbrush icon. The icon can be expanded vertically to mimic the downward stroke of a paintbrush and thus lend itself to being utilised across a variety of mediums.
            </p>
            <img src={telford_logo} alt="Telford Paints - Logo" className="project_details_image--fullWidth "></img>
        </div>
        {/*<!--end of text wrapper-->*/}
    </div>
    {/*<!--end of row-->*/}
        <div className="project_details_flex_row">
        <div className="project_details_text_wrapper ">
            <h2 className="project_details_subheading">Branded Marketing Materials</h2>
            <hr></hr>
            <p className="project_details_body_text">
                Next I applied the logo and the primary icon across a range of different marketing materials.
            </p>
            <img src={telford_mockup} alt="Telford Paints - Marketing Materials" className="project_details_image--fullWidth box_shadow"></img>
        </div>
        {/*<!--end of text wrapper-->*/}
    </div>
    {/*<!--end of row-->*/}
    {/*<!--END OF PROJECTS SECTION-->*/}
    </>
    )
}

export default TELFORD