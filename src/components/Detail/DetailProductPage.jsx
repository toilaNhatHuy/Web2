import "./DetailProductPage.css"
import {Link} from 'react-router-dom'
import React, { useState } from 'react';
// import {image} from '' 
function Detail() {
    
    const [des1, setDes1] = useState('');

    const updateDes1 = (url, position) => {
        setDes1(url); // Nếu không có URL, đặt giá trị rỗng
    }

    // const [des2, setDes2] = useState('');

    // const updateDes2 = (url) => {
    //     setDes2(url || '')
    // }

    // const [des3, setDes3] = useState('');

    // const updateDes3 = (url) => {
    //     setDes3(url || '')
    // }

    // const [des4, setDes4] = useState('');

    // const updateDes4 = (url) => {
    //     setDes4(url || '')
    // }



  return (
    <div className="Detail">
        <div className="Back">
            <Link id = "back" to = "/products">{'<'} PRODUCTS</Link>
        </div>
        <div className="Clothes-Description">
            <div className="Clothes">
            <div className="left-side">
            <div
              onClick={() => updateDes1('https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D')}
              className="side1"
            >
              <div className="dt-img1">
                
              </div>
              
            </div>
            <div
              onClick={() => updateDes1('https://plus.unsplash.com/premium_photo-1673866484792-c5a36a6c025e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D')}
              className="side2"
            >
              <div className="dt-img2">

              </div>
            </div>
            <div
              onClick={() => updateDes1('https://plus.unsplash.com/premium_photo-1689606093808-3cb4393248d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D')}
              className="side3"
            >
              <div className="dt-img3">

              </div>
            </div>
            <div
              onClick={() => updateDes1('https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D')}
              className="side4"
            >
              <div className="dt-img4">

              </div>
            </div>
          </div>

          <div className="right-side">
            {/* Hiển thị ảnh hiện tại */}
            {des1 && (
              <div className="des1">
                <img src={des1} alt="Selected" />
              </div>
            )}
          </div>
        </div>

            <div className="Description">
                <h1>Men's Checkered Long<br/> Sleeve Button Shirt</h1>
                <span id = "ds-price">$27,6</span>
                <span id = "ds2-price">$20,3</span>
                <div className="Select">
                    <div className="size-title">
                        <h2>Select size</h2>
                    </div>

                    <div className="size">
                        <button>S</button>
                        <button>M</button>
                        <button>L</button>
                        <button>XL</button>
                    </div>

                    <div className="amount">
                        <button>-</button>
                        <div className="amout-product">
                            <label>1</label>
                        </div>
                        <button>+</button>
                    </div>

                    <div className="add-to-cart">
                        <button>ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="More-Detail">
            <div className="m-detail-title">
                <h1>Details</h1>
            </div>
            <div className="paragraph-detail">
                <p>
                    It is a long established fact that a reader will be distracted by<br/>
                    the readable content of a page when looking at its layout. The<br/>
                    point of using Lorem Ipsum is that it has a more-or-less<br/>
                    normal distribution of letters, as opposed to using 'Content<br/> here, content here
                </p>
                
            </div>
            <div className="ul-detail">
                <ul>
                    <li>Form: modern</li>
                    <li>Material: 100% Cotton</li>
                    <li>Color: White</li>
                </ul>
            </div>
            <div className="hr">
                
            </div>
            
        </div>
    </div>
  )
}

export default Detail