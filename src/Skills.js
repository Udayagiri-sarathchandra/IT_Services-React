import React from 'react'
import ReactDOM from 'react-dom';
import Background from './assets/images/abcd.gif'
import { BsFillStopFill } from "react-icons/bs";
import { FaHtml5, FaCss3Alt, FaBootstrap } from "react-icons/fa";
var Internalstyles =
{
    backgroundImage: `url(${Background})`,
}

export default function () {

    return (<>
        <main id="Skills-Main" style={Internalstyles} >

            <h1 className="text-light p-5 "><BsFillStopFill />SKILLS</h1>


            <div className="row ">
                <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                    <figure className="card w-100 h-100 mx-auto bg-transparent">
                        <div className="card-body text-white">
                            <figcaption className="card-title h5 text-center text-success">
                                {/* <i className="fab fa-html5 w-50 py-3"></i> */}
                                <FaHtml5 />
                                <br />
                                HTML
                            </figcaption>
                            <figcaption className="card-text h6 text-center py-3">
                                Will strive to provide services by using the knowledge of HTML,CSS and BOOTSTRAP which I
                                acquired.
                                I am also willing to learn latest technologies and be a part of
                                for the better productivity of our company.
                            </figcaption>
                            <div className="progress">
                                <div className="progress-bar bg-success" role="progressbar" style={{ width: '80%' }}
                                    aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </figure>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 ">
                    <figure className="card w-100 h-100 mx-auto bg-transparent">
                        <div className="card-body text-white">
                            <figcaption className="card-title h5 text-center text-info">
                                {/* <i className="fab fa-css3 w-50 py-3"></i> */}
                                <FaCss3Alt />
                                <br />
                                CSS
                            </figcaption>

                            <figcaption className="card-text h6 text-center py-3">
                                Will strive to provide services by using the knowledge of HTML,CSS and BOOTSTRAP which I
                                acquired.
                                I am also willing to learn latest technologies and be a part of
                                for the better productivity of our company.
                            </figcaption>
                            <div className="progress">
                                <div className="progress-bar bg-info" role="progressbar" style={{ width: '50%' }}
                                    aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </figure>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                    <figure className="card w-100 h-100 mx-auto bg-transparent">
                        <div className="card-body text-white">
                            <figcaption className="card-title h5 text-center text-warning">
                                {/* <i className="fab fa-bootstrap w-50 py-3"></i> */}
                                <FaBootstrap />
                                <br />
                                BOOTSTRAP
                            </figcaption>

                            <figcaption className="card-text h6 text-center py-3">
                                Will strive to provide services by using the knowledge of HTML,CSS and BOOTSTRAP which I
                                acquired.
                                I am also willing to learn latest technologies and be a part of
                                for the better productivity of our company.

                            </figcaption>
                            <div className="progress">
                                <div className="progress-bar bg-warning" role="progressbar" style={{ width: '75%' }}
                                    aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </figure>

                </div>
            </div>


        </main>
    </>)
}