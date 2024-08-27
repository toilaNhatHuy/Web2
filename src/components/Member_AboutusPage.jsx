import './Member_AboutusPage.css'

import React from 'react'

function Member() {
  return (
    <div className="Member">
        <div className="member-title">
            <h1 id= "meet">MEET OUR LEADER</h1>
        </div>
        <div className="all-member">
            <div className="member1">
                <div className="member1-img">

                </div>
                <div className="member1-info">
                    <p id = "name1">Nguyễn Hoàng Phúc</p>
                    <div className="ctu-icon2">
                        <i id = 'contact-icon' className="fa-brands fa-facebook"></i>
                        <i id = 'contact-icon' className="fa-brands fa-instagram"></i>
                        <i id = 'contact-icon' className="fa-brands fa-telegram"></i>
                        <i id = 'contact-icon' className="fa-brands fa-facebook-messenger"></i>
                    </div>
                </div>
            </div>
            <div className="member-2">
                <div className="member2-img">

                </div>
                <div className="member2-info">
                    <p id = "name2">Nguyễn Đình Nhất Huy</p>
                    <div className="ctu-icon2">
                        <i id = 'contact-icon' className="fa-brands fa-facebook"></i>
                        <i id = 'contact-icon' className="fa-brands fa-instagram"></i>
                        <i id = 'contact-icon' className="fa-brands fa-telegram"></i>
                        <i id = 'contact-icon' className="fa-brands fa-facebook-messenger"></i>
                    </div>
                </div>
            </div>
            <div className="member-3">
                <div className="member3-img">

                </div>
                <div className="member3-info">
                    <p id = "name3">Nguyễn Cao Cường</p>
                    <div className="ctu-icon2">
                        <i id = 'contact-icon' className="fa-brands fa-facebook"></i>
                        <i id = 'contact-icon' className="fa-brands fa-instagram"></i>
                        <i id = 'contact-icon' className="fa-brands fa-telegram"></i>
                        <i id = 'contact-icon' className="fa-brands fa-facebook-messenger"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Member