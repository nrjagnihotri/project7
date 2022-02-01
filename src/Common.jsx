import React from "react";
import { NavLink } from "react-router-dom";
const img1 = "https://picsum.photos/200/300";
const Common = (props) => {
    return (<>
        <section id="header" className="d-flex-align-items-center">
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-1 d-flex justify-content-center flex-column">
                                <h2>{props.name}
                                    <strong className="brand-name"> Neeraj Agnihotri</strong></h2>
                                <h3 className="my-3">
                                    we are the team of the talented developer making website
                                </h3>
                                <div className="mt-3">
                                    <NavLink to={props.visit}
                                        className="btn-get-started">{props.btname}

                                    </NavLink>
                                </div>

                            </div>
                            <div className="collg-6 order-1 order-lg-2 header-img">
                                <img src={props.imgsrc} className="img-fluid animated" alt="Common" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section>

    </>)
}


export default Common;
