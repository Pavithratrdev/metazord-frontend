import React from "react"
import { Link } from "react-router-dom"
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'

const Footer = () => <footer className="page-footer font-small bg-primary text-white pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">House Of MetaZord</h5>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase"><FontAwesomeIcon icon={faLocationDot} /> Address</h5>
                <ul className="list-unstyled">
                    <li>House Of Metazord</li>
                    <li>No.210 , KITE</li>
                    <li>KGiSL Campus</li>
                    <li>Saravanampatti</li>
                    <li>Coimbatore</li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled text-white footer">               
                 
                    <li><FontAwesomeIcon icon={faLinkedinIn} className="mr" /><a target="_BLANK" href="https://www.linkedin.com/in/house-of-metazord-kgisl-educational-institutions-9b50ab252">House of MetaZord</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2022 Copyright:
        <Link href="/"> MetaZord.com</Link>
    </div>

</footer>

export default Footer