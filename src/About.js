//About.js-> Module
import React from 'react'
//import ReactDOM from 'react-dom';
import Aboutimg from './assets/images/abt-MAIN.jpg'
import Background from './assets/images/abcd.gif'
import { BsFillStopFill } from "react-icons/bs";
var Internalstyles =
{
    backgroundImage: `url(${Background})`,
}
//About Component
export default function () {
    return (<>
        <main id="About-Main" style={Internalstyles}>
            <h1 className="text-light py-3 px-5 ">
                {/* <i className="bi bi-align-start w-50 mx-5"></i> */}
                <BsFillStopFill />
                ABOUT</h1>

            <p className="col-10 mx-5 px-5 text-light">I am a design-oriented web developer in Hyderabad.
                I strives to build immersive and beautiful web applications through carefully crafted code
                and user-centric design.I am very passionate towards learning latest technologies.
                I do listen to music and surf the blogs of famous people in various fields whenever I am
                free and I like to work in a group as I can mingle with people easily.
            </p>

            <div className="row">

                <div className="card col-lg-4 col-md-4 col-sm-6 col-12 bg-transparent">
                    <img src={Aboutimg} width="75%" className="mx-5" />
                    <div className=" px-5 text-light">
                        DOB: 01-11-1994 <br />
                        Contact No: 8919974509 <br />
                        Email Id: u.sarathchandra94@gmail.com
                    </div>

                </div>
                <div className="col-lg-8 col-md-8 col-sm-6 col-12  p-5">
                    <h3>Hello World, I am Sarath Chandra</h3>
                    <h3>Graphic&Web designer</h3>
                    <p className="col-9 my-2">I am interested towards development side when I come to know the
                        importance and
                        the need of online applications when the outside world is becoming digital now-a-days.
                        <br /><br />
                    </p>
                </div>
            </div>

        </main>

    </>)
}