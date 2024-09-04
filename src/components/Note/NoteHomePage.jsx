import './NoteHomePage.css'
import React from 'react';
import {Link} from 'react-router-dom'
function Note() {
  return (
    <div className="Note">
        <div className="content">
            <div className="n-title">
                <h1 id = "note-1">THE “EARTH” WITHOUT “ART” IS JUST “EH”</h1><br/>
            </div>

            <div className="n-paragraph">
                <h2 id = 'note-2'>If you want your life to be more colorful, come to us</h2><br/>
            </div>

            <Link to = "/products" className="note-button">
            <button className="animated-button">
  <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
    <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
  </svg>
  <span className="text">Explore More Products</span>
  <span className="circle"></span>
  <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
    <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
  </svg>
</button>
            </Link>
        </div>  
    </div>
  )
}

export default Note