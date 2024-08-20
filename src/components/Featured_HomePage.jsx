import './Featured_HomePage.css'
import React from 'react'

function Featured() {
  return (
    <div className="container">
      <div className="Featured">
        <div className="right-ft">
          <h3 id = "h3-1">Featured</h3>
        </div>

        <div className="left-ft">
          <h3 id = "h3-2">Shop</h3>
          <button id = "prev-ft">{'<'}</button>
          <button id = "next-ft">{'>'}</button>
        </div>
      </div>

      <div className="container-2">
        <div className="Attire-1">
          <div className="attire-1">Hoodies</div>
          <div className="attire-1">Tank Tops</div>
          <div className="attire-1">Sweaters</div>        
        </div>

        <div className="Attire-2">
          <div className="attire-2">Jacket</div>
          <div className="attire-2">Blazers</div>
          <div className="attire-2">T-Shirt</div>
        </div>
      </div>


    </div>
  )
}

export default Featured