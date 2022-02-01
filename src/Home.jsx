import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";
const img1 = "https://picsum.photos/200/300";
const Home = () => {
    return (<>

        <Common name="Grow your bussiness"
            imgsrc={img1}
            visit='/service'
            btname="Get Started" />

    </>)
}


export default Home;
