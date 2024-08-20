import './Note_HomePage.css'
import React , { Component}  from 'react';

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

            <div className="note-button">
                <button id = 'n-btn'>EXPLORE MORE PRODUCT</button><br/>
            </div>
        </div>  
    </div>
  )
}

export default Note