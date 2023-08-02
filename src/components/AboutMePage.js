import React from "react";
import photo from "../assets/images/Portfolio-Avatar.jpg";

export default function AboutMe() {
    return (
        <div>
            <h2 className="title-aboutme">About Me</h2>
            <div className="pix">
                <img className="image" src={photo} alt="Dom" />
            </div>
            <div className="aboutme">
                <p>
                    Hi there! My name is Dominick Confessore and I am an aspiring web developer who has recently finished the Rutgers Coding Bootcamp. Prior to pursuing a career in the coding world, I worked for the Somerset Patriots where I was the assistant groundskeeper for a season. I then dove into the car industry, where I was a service advisor for three years. After getting married, I decided it was time to pursue a new chapter in my work life. I pride myself in being an extremely hard worker and I cannot wait to continue my journey into the developer world!
                </p>
            </div>
        </div>
    )
}

