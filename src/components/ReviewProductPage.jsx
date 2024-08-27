import React from 'react'
import "./ReviewProductPage.css"
import {Routes, Route, Link} from 'react-router-dom'

function Review() {
  return (
    <div className="Reviews">
        <div className="Review-Rate">
            <h1 id ="rv-title">Reviews</h1>
            <h2>
                <p id="rate"><i className="fa-solid fa-star"></i></p>
                <p id="rate"><i className="fa-solid fa-star"></i></p>
                <p id="rate"><i className="fa-solid fa-star"></i></p>
                <p id="rate"><i className="fa-solid fa-star"></i></p>
                <p id="rate"><i className="fa-solid fa-star"></i></p>
            </h2>
            <h1 id = "consequence">5 Stars</h1>
        </div>
        <Link id = "comment" to = "/aboutus">Write a Review</Link>
        <div className="Comment">
            <h2>
                <p id="rate"><i className="fa-solid fa-star"></i></p>
                <p id="rate"><i className="fa-solid fa-star"></i></p>
                <p id="rate"><i className="fa-solid fa-star"></i></p>
                <p id="rate"><i className="fa-solid fa-star"></i></p>
                <p id="rate"><i className="fa-solid fa-star"></i></p>
            </h2>
        </div>



        
        <div className="Client-Reviews">
            <div className="Summarize">
                <h2>Look amazing and comfort</h2>
            </div>
            <div className="client-name">
                <h2>hoangphuc123 - 14 Aug 2024</h2>
            </div>
        </div>
        <div className="Comment-P">
            <p>I love the comfort and the style plays a close second. I can go to the gym or head offshore on my boat in my slides. I'm glad I was able to grab a pair before everybody realizes these slides are amazing. I think they are true to size but like all slides your feet tend to swell a little but still felt they were spot on.</p>
        </div>

        <div className="Comment">
            <h2>
                <p id="rate"><i className="fa-solid fa-star"></i></p>
                <p id="rate"><i className="fa-solid fa-star"></i></p>
                <p id="rate"><i className="fa-solid fa-star"></i></p>
                <p id="rate"><i className="fa-solid fa-star"></i></p>
                <p id="rate"><i className="fa-solid fa-star"></i></p>
            </h2>
        </div>
        <div className="Client-Reviews">
            <div className="Summarize">
                <h2>Comfort is important</h2>
            </div>
            <div className="client-name">
                <h2>nhathuy123 - 14 Aug 2024</h2>
            </div>
        </div>
        <div className="Comment-P">
            <p>The spectacular design adds new age to comfort. Futuristic technology elevates this modern day slide. Dressed up or down Jordan keeps his hand on the pulse of women’s wear.</p>
        </div>



        <div className="Comment">
            <h2>
                <p id="rate"><i className="fa-solid fa-star"></i></p>
                <p id="rate"><i className="fa-solid fa-star"></i></p>
                <p id="rate"><i className="fa-solid fa-star"></i></p>
                <p id="rate"><i className="fa-solid fa-star"></i></p>
                <p id="rate"><i className="fa-solid fa-star"></i></p>
            </h2>
        </div>
        <div className="Client-Reviews">
            <div className="Summarize">
                <h2>Very comfortable!</h2>
            </div>
            <div className="client-name">
                <h2>caocuong123 - 14 Aug 2024</h2>
            </div>
        </div>
        <div className="Comment-P">
            <p>The spectacular design adds new age to comfort. Futuristic technology elevates this modern day slide. Dressed up or down Jordan keeps his hand on the pulse of women’s wear.</p>
        </div>
    </div>
  )
}

export default Review