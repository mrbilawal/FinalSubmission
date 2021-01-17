import React from 'react';
import { Link } from 'react-router-dom';
import "./index.css"
import {FaFacebook,FaSnapchat,FaInstagram,FaTwitter,FaWhatsapp} from "react-icons/fa"
const Footer = () => {
    return ( <div>
        <footer>
            <div className="container-fluid padding">
                <div >
                    <div className="col-lg-12">
                    <hr className="ruler"></hr>
                    <p className="text-center"><strong>ALGHANI ENGINEERING SERVICES</strong></p>
                    <p className="text-center"><a href="#"><strong>Consulting Engineers</strong></a></p>
                    <p className="text-center"><a href="#"><strong>1-C, Block-N, Model Town Extension,
Lahore 54700, Pakistan</strong></a></p>
                    <p className="text-center"><a href="#"><strong>NESPAK, 2020. All Rights Reserved.</strong></a></p>
                    <a href="#" style={{marginLeft:"620px"}}><FaFacebook size="2em"/></a>
                    <a href="#"><FaWhatsapp size="2em"/></a>
                    </div>
                </div>
            </div>
        </footer>
    </div> );
}
 
export default Footer;