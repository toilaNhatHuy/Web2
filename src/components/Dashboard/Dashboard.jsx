import './Dashboard.css'
import React, {useState} from 'react'

function Dashboard() {

    const [selectedSize, setSelectedSize] = useState('');
    const handleCheckboxChange = (size) => {
        setSelectedSize(size);
    }


    const [price, setPrice] = useState('');
    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    }
  return (
    <div className="Dashboard">
        <div className="dashboard-title">
            <h1>CREATE A NEW PRODUCT</h1>
        </div>
        <div className="Create-Part"> {/* css cho width va height lam khung cho cho tao sp */}
            <div className="Product-DS"> {/* cho hien san pham */}

            </div>

            <div className="Input-DS"> {/*cho nhap vao dieu kien cho san pham */}
                <div className="Input-DS-Name">
                    <h4>Name</h4>
                    <input type="text" placeholder='Name..' /> {/*ten san pham*/}    
                </div>

                <div className="Input-DS-Color">
                    <h4>Color</h4>
                    <input type="text" placeholder='Color..' /> {/*mau san pham*/}
                </div>

                <div className="Input-DS-Price">
                <h4>Price</h4>
                <input
                    type="number"
                    placeholder='Price..'
                    value={price}
                    onChange={handlePriceChange}
                />
            </div>
                
                <div className="size-container">
                    <div className="size-s">
                        <p>S</p>
                        <input
                        type="checkbox"
                        checked={selectedSize === 'S'}
                        onChange={() => handleCheckboxChange('S')}
                        />
                    </div>
                    
                    <div className="size-m">
                        <p>M</p>
                        <input
                        type="checkbox"
                        checked={selectedSize === 'M'}
                        onChange={() => handleCheckboxChange('M')}
                        />
                    </div>

                    <div className="size-l">
                        <p>L</p>
                        <input
                        type="checkbox"
                        checked={selectedSize === 'L'}
                        onChange={() => handleCheckboxChange('L')}
                        />
                    </div>

                    <div className="size-xl">
                        <p>XL</p>
                        <input
                        type="checkbox"
                        checked={selectedSize === 'XL'}
                        onChange={() => handleCheckboxChange('XL')}
                        />
                    </div>
                </div>
            </div>
            <button className="create-DS-btn">Create</button>
        </div>
    </div>
  )
}

export default Dashboard