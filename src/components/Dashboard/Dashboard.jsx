import './Dashboard.css'
import React from 'react'

function Dashboard() {
  return (
    <div className="Dashboard">
        <div className="dashboard-title">
            <h1>CREATE A NEW PRODUCT</h1>
        </div>
        <div className="Create-Part"> {/* css cho width va height lam khung cho cho tao sp */}
            <div className="Product-DS"> {/* cho hien san pham */}

            </div>

            <div className="Input-DS"> {/*cho nhap vao dieu kien cho san pham */}
                <input type="text" /> {/*ten san pham*/}
                <input type="text" /> {/*mau san pham*/}
                <div className="size-s">
                    <p>S</p>
                    <input type="checkbox" /> {/*Size san pham*/}
                </div>
                
                <div className="size-m">
                    <p>M</p>
                    <input type="checkbox" /> {/*Size san pham*/}
                </div>

                <div className="size-l">
                    <p>L</p>
                    <input type="checkbox" /> {/*Size san pham*/}
                </div>

                <div className="size-xl">
                    <p>XL</p>
                    <input type="checkbox" /> {/*Size san pham*/}
                </div>
            </div>

        </div>
    </div>
  )
}

export default Dashboard