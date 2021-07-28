import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaIdBadge, FaMailBulk, FaPhone, FaRegCommentAlt } from "react-icons/fa";

export default () => {

    return (<>
        <main id="Contact-Main">

            <h1 className="text-light p-5 "><i className="bi bi-align-start w-50 mx-5"></i>Contact</h1>

            <form id="contact-form" method="post" role="form" className="col-md-6 mx-auto ">

                <div className="controls">
                    <div className="row">
                        <form action="">
                            <div className="row">
                                <div className="col-lg-6">
                                    <label className="form-label mx-auto ">First Name</label>
                                    <div className="input-group">
                                        <span className="input-group-text">
                                            {/* <i className="bi bi-person-circle"></i> */}
                                            <FaIdBadge />
                                        </span>
                                        <input className="form-control" type="text" autocomplete="off" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <label className="form-label mx-auto ">Last Name</label>
                                    <div className="input-group">
                                        <span className="input-group-text">
                                            {/* <i className="bi bi-person-circle"></i> */}
                                            <FaIdBadge />
                                        </span>
                                        <input className="form-control" type="text" autocomplete="off" />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="form-label">Email id</label>
                                <div className="input-group">
                                    <span className="input-group-text">
                                        {/* <i className="bi bi-envelope-fill"></i> */}
                                        <FaMailBulk />
                                    </span>
                                    <input className="form-control" type="text" autocomplete="off" />
                                </div>
                            </div>
                            <div>
                                <label className="form-label">Phone No</label>
                                <div className="input-group">
                                    <span className="input-group-text">
                                        {/* <i className="bi bi-phone-fill"></i> */}
                                        <FaPhone />
                                    </span>
                                    <input className="form-control" type="text" autocomplete="off" />
                                </div>
                            </div>
                            <div>
                                <label className="form-label">Message</label>
                                <div className="input-group">
                                    <span className="input-group-text">
                                        {/* <i className="bi bi-chat-dots-fill"></i> */}
                                        <FaRegCommentAlt />
                                    </span>
                                    <textarea className="form-control" type="text" autocomplete="off" >
                                    </textarea>
                                </div>
                            </div>

                        </form>


                        <div className="col-md-12">
                            <br /> <input type="submit" className="btn btn-success btn-send" value="Send message" />
                        </div>
                    </div>
                </div>
            </form>


            <p className="text-center p-4">Travel with us "Come Fly with me to the end of the Sky" <a href="#">SkyEnd
                Travels</a>
            </p>

            <ul className="social_footer_ul">
                <li><a href="SkyEndTravels.html">
                    {/* <i className="bi bi-facebook"></i> */}
                    <FaFacebookF />
                </a></li>
                <li><a href="SkyEndTravels.html">
                    {/* <i className="bi bi-twitter"></i> */}
                    <FaTwitter /> </a></li>
                <li><a href="SkyEndTravels.html">
                    {/* <i className="bi bi-linkedin"></i> */}
                    <FaLinkedinIn />
                </a></li>
                <li><a href="SkyEndTravels.html">
                    {/* <i className="bi bi-instagram"></i> */}
                    <FaInstagram />
                </a></li>
            </ul>


        </main>

    </>)
}