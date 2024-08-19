import './Home.css';
import React , { Component}  from 'react';
function Home() {
    return(
        <div className="home">
            <button id="prev">
                    <span>{'<'}</span>
            </button>

            <h1 id = "Title">HOME</h1>

            <button id="next">
                <span>{'>'}</span>
            </button>
            </div>
    )
}

export default Home


