import React from 'react';
import MainSlider from "../Components/MainSlider";
import Cards from "../Components/Cards";
import data from "../Components/Data/maindata.json";
import AboutSection from "../Components/AboutSection";

function Home() {
    return (
        <>
            <MainSlider />
            <Cards cardTitle={data[1].cardstitle} />
            <AboutSection aboutTitle={data[2]} />
        </>
    )
}

export default Home;