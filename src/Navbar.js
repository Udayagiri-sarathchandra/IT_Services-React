import React from 'react'
import Logo from './assets/images/logo.png'
import Background from './assets/images/port2.jpg'

var Internalstyles =
{
    backgroundImage: `url(${Background})`,
}


export default function () {

    return (<>
        <header style={Internalstyles}>

            <nav className="navbar navbar-expand-md navbar-dark bg-transparent">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={Logo} width="15%" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarID"
                        aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarID">
                        <ul className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            <a className="nav-link active" aria-current="page" href="#About-Main">About</a>
                            <a className="nav-link active" aria-current="page" href="#Skills-Main">Skills</a>
                            <a className="nav-link active" aria-current="page" href="#Education-Main">Education</a>
                            <a className="nav-link active" aria-current="page" href="#Portfolio-Main">Portfolios</a>
                            <a className="nav-link active" aria-current="page" href="#Services-Main">Services</a>
                            <a className="nav-link active" aria-current="page" href="#Contact-Main">Contact</a>

                        </ul>
                    </div>
                    <div className=" text-white">
                        <div className="col-lg-6 col-md-6 col-sm-6 p-3 m-5">
                            <br /><br /><br />
                            <div className="well text-center ">
                                <h2> SARATH CHANDRA UDAYAGIRI </h2>
                                <p className=" h4"> Web Developer </p>
                                <a className="btn btn-secondary btn-md " href="#" role="button">More </a>
                            </div>
                        </div>

                    </div>
                </div>

            </nav>

        </header>
    </>)
}