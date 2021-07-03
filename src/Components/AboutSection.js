import React from "react";


const aboutsectionstyles = {
    backgroundColor : "rgb(60 60 60)",
    color: "white"
}


function AboutSection({aboutTitle}) {
    return (
        <div style={aboutsectionstyles} className="mt-5 p-5 text-center">
            <h2 className="pb-5">{aboutTitle.aboutsectiontitle}</h2>
            <p>{aboutTitle.aboutsectioncontent}</p>
        </div>
    )
}

export default AboutSection;