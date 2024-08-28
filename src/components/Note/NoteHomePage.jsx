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
                <button id = 'n-btn'>EXPLORE MORE PRODUCT</button><br/>
            </Link>
        </div>  
    </div>
  )
}

export default Note