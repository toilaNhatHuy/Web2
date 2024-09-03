import './Credibility.css'
import React from 'react'

function Credibility() {
  return (
    <div className="Credibility">
        <div className="Cr-Shop">
            <img src="https://pngimg.com/uploads/free_shipping/free_shipping_PNG74.png" alt="" />
            <p>Free Shipping Worldwide</p>
        </div>

        <div className="Cr-Guarantee">
            <img src="https://cdn2.iconfinder.com/data/icons/black-stroke-labels-2/128/quality_guarantee_label_guaranteed-1024.png" alt="" />
            <p>Money Back Guarantee</p>
        </div>

        <div className="Cr-Flash">
            <img src="https://cdn.pixabay.com/photo/2014/04/02/11/15/bolt-305692_1280.png" alt="" />
            <p>Custommer Support 24/7</p>
        </div>
    </div>
  )
}

export default Credibility