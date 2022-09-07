import React from "react";

export default function Info() {
    return (
        <div id="info">
            <img src="../images/face.png" alt="face" id="image"/>
            <h2 id="name">Laura Smith</h2>
            <h4 id="job">Frontend Ddeveloper</h4>
            <a id="website">laurasmith.website</a>
            <div id="socials">
                <div id="email">
                    <img src="../images/mail.png"/>
                    <p>Email</p>
                </div>
                <div id="linkedin">
                    <img src="../images/linkedin-in-brands.svg" id="linkedin_img"/>
                    <p>LinkedIn</p>
                </div>
            </div>
        </div>
    )
}