import React from 'react';
import './Footer.css';
import logo from '../images/logo1.png';


const Footer = () => {
	return (
        <div className="footerContainer">
            <div className="footerColumn">
            <img src={logo} alt='logo'/>
				
			</div>
			<div className="footerColumn">
				<h4>Social Media</h4>
				<div>Facebook</div>
				<div>Instagram</div>
				<div>Telegram</div>
				<div>LinkedIn</div>
			</div>
			<div className="footerColumn">
				<h4>About</h4>
				<div>Contact us</div>
				<div>Careers</div>
			</div>
			<div className="footerColumn">
				<h4>Location</h4>
				<div>Auckland</div>
				<div>New-York</div>
			</div>
		</div>
    )

};

export default Footer;