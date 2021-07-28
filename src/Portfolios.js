import React from 'react'
//import ReactDOM from 'react-dom';
import Pp1 from './assets/images/pp1.png'
import Pp2 from './assets/images/pp2.png'
import Pp3 from './assets/images/pp3.png'
import Pp4 from './assets/images/pp4.png'
import { BsFillStopFill } from "react-icons/bs";

export default () => {

    return (<>
        <main id="Portfolio-Main">
            <h1 className="text-light p-5 ">
                {/* <i className="bi bi-align-start w-50 mx-5"></i> */}
                <BsFillStopFill />
                PORTFOLIO</h1>

            <ul className="nav nav-tabs justify-content-center py-0">


                <li className="nav-item active ">
                    <a className="nav-link" data-bs-toggle="tab" data-bs-target="#rehman">
                        <p className="text-info">AR Rehman</p>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" data-bs-target="#yamaha">
                        <p className="text-warning">Yamaha</p>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" data-bs-target="#Travels">
                        <p className="text-success">Travels</p>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" data-bs-target="#shop">
                        <p className="text-danger">SET Shop</p>
                    </a>
                </li>

            </ul>
            <div className="tab-content text-center" id="sampletabs">
                <div className="tab-pane active  mx-auto text-center" id="rehman">
                    <a href="TRAIL.html">
                        <img src={Pp2} width="100%" className="p-5" />
                    </a>


                </div>

                <div className="tab-pane mx-auto text-center" id="yamaha">
                    <a href="webpage.html">
                        <img src={Pp1} width="100%" className="p-5" />
                    </a>


                </div>

                <div className="tab-pane mx-auto text-center" id="Travels">
                    <a href="SkyEndTravels.html">
                        <img src={Pp3} width="100%" className="p-5" />
                    </a>

                </div>

                <div className="tab-pane mx-auto text-center" id="shop">

                    <a href="SkyEndTravelsShop.html">
                        <img src={Pp4} width="100%" className="p-5" />
                    </a>

                </div>

            </div>



        </main>
    </>)
}