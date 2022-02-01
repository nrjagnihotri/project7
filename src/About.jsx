import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";
const img1 = "https://picsum.photos/200/300";
const About = () => {
    return (<>
        <Common
            name="Welcome to page"
            imgsrc={img1}
            visit='/contact'
            btname="Contact Now" />



    </>)
}


export default About;

