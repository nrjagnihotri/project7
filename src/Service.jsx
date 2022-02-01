import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";
const img1 = "https://picsum.photos/200/300";

const Service = () => {
    return (<>
        <div className="my-5">
            <h1 className="taxt-center">
                Our Services
            </h1>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        {
                            Sdata.map((val, index) => {
                                return <Card
                                    key={index}
                                    imgsrc={val.imgsrc}
                                    title={val.title}
                                />

                            })
                        }
                    </div>
                </div>
            </div>

        </div>
    </>)
}


export default Service;
