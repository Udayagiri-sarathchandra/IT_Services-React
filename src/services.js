import React from 'react'
import ReactDOM from 'react-dom';
import { FaWindowRestore } from "react-icons/fa";

export default function () {

    return (<>
        <main id="Services-Main" >

            <h1 className="text-light p-5 ">
                {/* <i className="bi bi-align-start w-50 mx-5"></i> */}

                SERVICES</h1>

            <div className="row p-5">
                <div className="col-lg-1 my-4 bg-primary">
                    {/* <i className="bi bi-back "></i> */}
                    <FaWindowRestore className="text-weight-bold text-light" size="2x" />
                    {/* <FontAwesomeIcon icon={faSmile} className="text-weight-bold text-success" size="2x" /> */}

                </div>
                <div className="col-lg-5">

                    <div className="card">

                        <div className=" card-body bg-dark">
                            <h5 className="card-title">Web Deveplopment</h5>
                            <h6 className="card-subtitle mb-2 text-muted ">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the
                                bulk
                                of the card's content.</p>

                        </div>
                    </div>
                </div>
                <div className="col-lg-1 my-4 bg-warning">
                    {/* <i className="bi bi-back "></i> */}
                    <FaWindowRestore className="text-weight-bold text-light" size="2x" />
                </div>
                <div className="col-lg-5">
                    <div className="card  ">

                        <div className="card-body bg-dark">
                            <h5 className="card-title">Web design</h5>
                            <h6 className="card-subtitle mb-2 text-muted ">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the
                                bulk
                                of the card's content.</p>

                        </div>
                    </div>
                </div>



            </div>


            <div className="row p-5">
                <div className="col-lg-1 my-4 bg-success">
                    {/* <i className="bi bi-back "></i> */}
                    <FaWindowRestore className="text-weight-bold text-light" size="2x" />
                </div>
                <div className="col-lg-5">

                    <div className="card">

                        <div className=" card-body bg-dark">
                            <h5 className="card-title">UI Development</h5>
                            <h6 className="card-subtitle mb-2 text-muted ">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the
                                bulk
                                of the card's content.</p>

                        </div>
                    </div>
                </div>
                <div className="col-lg-1 my-4 bg-danger">
                    {/* <i className="bi bi-back "></i> */}
                    <FaWindowRestore className="text-weight-bold text-light" size="2x" />
                </div>
                <div className="col-lg-5">
                    <div className="card">

                        <div className="card-body bg-dark">
                            <h5 className="card-title">SEO</h5>
                            <h6 className="card-subtitle mb-2 text-muted ">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the
                                bulk
                                of the card's content.</p>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>)
}