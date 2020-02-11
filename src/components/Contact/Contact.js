import React from "react";
import { withPrefix } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import phpFormScript from "../../components/Contact/send_form_email.php";

//IMAGE IMPORTS
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import contact_envelope from "../../images/svgicons/envelope.svg";
//CSS
import ContactCSS from "../Contact/ContactCSS.css";
const Contact = () => ( 
<>
<a href="/" id="contact" className="hidden_A_link" aria-hidden="true"></a>
    <div className="divider">
        <h2 className="dividerHeading">CONTACT</h2>
    </div>
    <div className="contactBgWrapper">
        <div className="contact-text-wrapper">
    <h2 id="contact-text-headline">Let's chat!</h2>
             <h2 id="contact-text-main">Why don't you drop me a line?<br></br>I am always open to discussing new projects, creative ideas and opportunities to bring them to life.<br></br></h2>
            <FontAwesomeIcon icon={faLeaf} className="fa-leaf"></FontAwesomeIcon>
        </div>
        <div id="formContainer">
            <img src={contact_envelope} alt="Envelope Icon" id="formEmailSvgIcon"></img>
            <form method="post" action="https://formspree.io/xvoaveko" id="my_form">
                <input className="formInput" name="name" type="text" maxLength="255" placeholder="name"></input>
                <input className="formInput" name="_replyto" type="email" maxLength="255" placeholder="email"></input>
                <textarea id="textArea" name="message" placeholder="enter your message here.."></textarea>
                <input id="submitButton" type="submit" value="Send"></input>
                <div class="g-recaptcha" data-sitekey="6Lew1dcUAAAAAA0v7TY9rjGvyVQA5AZiHhAce9hO"></div>
                <div id="server-results">
                    {/* <!-- For server results --> */}
                </div>
            </form>
        </div>
        {/* <!--end of contact form container--> */}
    </div>
</>
)

export default Contact
