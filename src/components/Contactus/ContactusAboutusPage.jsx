import './ContactusAboutusPage.css'

import React from 'react'

function Contactus() {
  return (
    <div className="ContactUs">
        <div className="contactus-title">
            <h1 id = "ctus">CONTACT US</h1>
        </div>

        <div className="Get-in-touch">
            <div className="get-in-touch">
                <div className="get-in-touch-1">
                    <h1>Get in touch</h1>
                    <p id = 'myP'>Lorem Ipsum is simply dummy text of the<br/> printing and typesetting industry. Lorem Ipsum<br/> has been the i</p>
                </div>
                <div className="get-in-touch-info">
                    <div className="Phone-number">
                        <div className="phone-number-icon">
                            <i id = 'p-icon' className="fa-solid fa-phone"></i>
                        </div>
                        <div className="phone-number-info">
                            <h2>Phone Number</h2>
                            <p id = "pn">+ 123-456-7890</p>
                        </div>
                    </div>
                    <div className="Email-address">
                        <div className="Email">
                            <div className="email-icon">
                                <i id ='e-icon' className="fa-solid fa-envelope"></i>
                            </div>
                            <div className="email-info">
                                <h2>Email</h2>
                                <p id = "em">streetbrand01@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="Location">
                        <div className="location">
                                <div className="location-icon">
                                    <i id = 'l-icon' className="fa-solid fa-location-dot"></i>
                                </div>
                                <div className="location-info">
                                    <h2>Address</h2>
                                    <p id = "lc">Phạm Ngũ Lão, Quận 1 TP.HCM</p>
                                </div>
                            </div>
                        </div>
                </div>
                
            </div>


            <div className="send-a-message">
                <div className="send-a-message-in">
                    <div className="send-a-message-title">
                        <h1>Send a Message</h1>
                    </div>
                    <div className="send-a-message-content">
                        <div className="sam-name">
                            <h2 id ="sam-input">Name</h2>
                            <input id = 'username' type="text" placeholder='Name' />
                        </div>
                        <div className="sam-email">
                            <h2 id = "sam-input">Email</h2>
                            <input id = 'user-email' type="text" placeholder='Email' />
                        </div>
                        <div className="sam-message">
                            <h2 id = 'sam-input'>Message</h2>
                            <input id = 'user-message' type="text" placeholder='Message' />
                        </div>
                        <div className="sam-message-btn">
                            <button id = "submit-send">SUBMIT</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Contactus