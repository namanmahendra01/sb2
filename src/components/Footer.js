import React from 'react'
import "./footer.css"
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { MdLocationOn} from 'react-icons/md';








export default function Footer() {
    return (
        <div>
            <div class="pFooter">
                <div class="centerPFooter">
                    <div class="startPFooter" />
                    <div class="newsletter">
                        <form>
                            <div class="emailFill">
                                <label>Subscribe to our Newsletter!</label><br></br>
                                <input type="email" class="enterEmail" placeholder="Enter email" name="Email"/><br></br>
                                <p>We'll never share your email with anyone else.</p>
                            </div>
                        </form>
                        <button class="btn">Subscribe</button>
                    </div>
                    <div class="midPFooter" />
                    <div class="desContainer">
                        <div class="innerDesContainer">
                            <p id="logo1">
                                <span>Follow Us On:</span>
                                <a class="delink" href="https://www.facebook.com/spaceboat.in/" target="blank" >
                                <i class="fab fa-facebook"   ><FaFacebookF/></i>
                                </a>
                                <a class="delink" href="https://www.instagram.com/humansofspaceboat/" target="blank">
                                <i class="fab fa-instagram">
                                <FaInstagram/></i>
                                </a>
                                <a class="delink" href="https://www.linkedin.com/company/spaceboatin/" target="blank">					
                                <i class="fab fa-linkedin" >
                               < FaLinkedinIn/>
                               </i>
                                </a>
                            </p>
                        </div>
                        <div class="location">
                            <h6>
                                <i class="fas fa-map-marker-alt"><MdLocationOn/></i>
                                &nbsp; S-347, Block S, Panchsheel Park South, Panchsheel Park, New Delhi, Delhi 110017
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
            <footer class="footer">
                <div class="centerFooter">
                    <div class="footerRow">
                        <div class="rooms">
                            <p class="roomHead">Classrooms</p>
                            <ul class="listStyle">
                                <li><p class="footDetails">Classrooms in Delhi</p></li>
                                <li><p class="footDetails">Classrooms in Noida, Gurgaon</p></li>
                            </ul>
                        </div>
                        <div class="rooms">
                            <p class="roomHead">Event Rooms</p>
                            <ul class="listStyle">
                                <li><p class="footDetails">Seminar Halls in Delhi NCR</p></li>
                                <li><p class="footDetails">Auditoriums Halls in Delhi NCR</p></li>
                            </ul>
                        </div>
                        <div class="rooms">
                            <p class="roomHead">Meeting Rooms</p>
                            <ul class="listStyle">
                                <li><p class="footDetails">Meeting Rooms in Delhi NCR</p></li>
                                <li><p class="footDetails">Boardrooms in Delhi NCR</p></li>
                            </ul>
                        </div>
                    </div>
                    <div class="copyright">
                        <p>Copyright © 2020 Spaceboat &nbsp; &nbsp; | &nbsp;&nbsp; Terms &amp; Conditions&nbsp;&nbsp;| &nbsp;&nbsp;Privacy Policy</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
