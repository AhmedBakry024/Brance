import Facebook from "../assets/Social/Facebook.png";
import Instagram from "../assets/Social/Instagram.png";
import Whatsapp from "../assets/Social/Whatsapp.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";


const Footer = () => {
    return (
        <div className='wrapper container-fluid'>
            <div className="footer row">
                <div className="footer-data col-4 col-lg-4 text-center">
                    <a href="/"><h6 className="footerTitle">About</h6></a>
                    <p className="footerText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, doloremque a. Fugit temporibus beatae itaque </p>
                </div>
                <div className="footer-data col-4 col-lg-4 text-center">
                    <a href="/" ><h6 className="footerTitle">Contact Us</h6></a>
                    <p className="footerText">Email Address: <a href="mailto:ahmedbakry024@gmail.com" className="fs-6 text-decoration-underline"> Gmail</a> </p>
                    <p className="footerText">Phone Number: (+20) 1159020992</p>
                </div>
                <div className="footer-data col-4 col-lg-4 text-center">
                    <a href="/" ><h6 className="footerTitle">Location</h6></a>
                    <p className="footerText">123 90st., New Cairo, Cairo, Egypt. </p>
                    <p className="footerText">Location on Google Maps: </p>
                </div>
            </div>
            
            <div className="social justify-content-center">
                <a href="https://www.instagram.com/_ahmedbakry/" target="_blank">
                <img src={Instagram}></img></a>
                <img src={Facebook}></img>
                <img src={Whatsapp}></img>
            </div>
            
            <div className="copyright">
                <p>Brance.com © 2023 All rights reserved</p>
            </div>
        </div>
    );
}

export default Footer;
