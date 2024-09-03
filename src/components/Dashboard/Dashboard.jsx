import './Dashboard.css';
import React, { useState, useEffect } from 'react';
import * as UserServicesFE from '../servicesFE/UserServicesFE';
import InputForm from '../Inputform/Inputform';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts, addProduct, setError } from '../redux/slides/productSlice';

function Dashboard() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [color, setColor] = useState('');
    const [sizeS, setSizeS] = useState(false);
    const [sizeM, setSizeM] = useState(false);
    const [sizeL, setSizeL] = useState(false);
    const [sizeXL, setSizeXL] = useState(false);




    const handleOnchangeName =(value) =>{
        setName(value)
    }
    const handleOnchangePrice =(value) =>{
        setPrice(value)
    }
    const handleOnchangeColor =(value) =>{
        setColor(value)
    }
    const handleOnchangeSizeS = (event) => {
        setSizeS(event.target.checked);
    }
    
    const handleOnchangeSizeM = (event) => {
        setSizeM(event.target.checked);
    }
    
    const handleOnchangeSizeL = (event) => {
        setSizeL(event.target.checked);
    }
    
    const handleOnchangeSizeXL = (event) => {
        setSizeXL(event.target.checked);
    }
    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const res = await UserServicesFE.createProducts(); // Hàm lấy danh sách sản phẩm
            if (res.data.status === "OK") {
                dispatch(setProducts(res.data.data));
            } else {
                dispatch(setError(res.data.message));
            }
        } catch (error) {
            dispatch(setError('Error fetching products: ' + error.message));
        }
    };

    const handleCreateProduct = async () => {
        try {
            const res = await UserServicesFE.createProducts({
                name,
                price,
                color,
                sizes: {
                    S: sizeS,
                    M: sizeM,
                    L: sizeL,
                    XL: sizeXL
                }
            });
            if (res.data.status === "OK") {
                dispatch(addProduct(res.data.product)); // Giả sử response trả về sản phẩm mới
                setName('');
                setPrice('');
                setColor('');
                setSizeS(false);
                setSizeM(false);
                setSizeL(false);
                setSizeXL(false);
                alert("CREATE PRODUCT SUCCESS")
            } else {
                dispatch(setError(res.data.message));
            }
        } catch (error) {
            dispatch(setError('Error creating product: ' + error.message));
        }
    };

    return (
        <div className="Dashboard">
            <div className="dashboard-title">
                <h1>CREATE A NEW PRODUCT</h1>
            </div>
            <div className="Create-Part">
                <div className="Input-DS">
                    <div className="Input-ds">
                        <h4>Name</h4>
                        <InputForm
                            type="text"
                            id="InputCreate"
                            placeholder="Name Product"
                            name='name'
                            value={name}
                            onChange={handleOnchangeName}
                        />
                    </div>
                    <div className="Input-ds">
                        <h4>Color</h4>
                        <InputForm
                            type="text"
                            id="InputCreate"
                            placeholder="Color"
                            name='color'
                            value={color}
                            onChange={handleOnchangeColor}
                        />
                    </div>
                    <div className="Input-ds">
                        <h4>Price</h4>
                        <InputForm
                            type="text"
                            id="InputCreate"
                            placeholder="Price"
                            name='price'
                            value={price}
                            onChange={handleOnchangePrice}
                        />
                    </div>
                    <div className="size-container">
                        <div className="size-s">
                            <p>S</p>
                            <input
                                type="checkbox"
                                checked={sizeS}
                                onChange={handleOnchangeSizeS}
                            />
                        </div>
                        <div className="size-m">
                            <p>M</p>
                            <input
                                type="checkbox"
                                checked={sizeM}
                                onChange={handleOnchangeSizeM}
                            />
                        </div>
                        <div className="size-l">
                            <p>L</p>
                            <input
                                type="checkbox"
                                checked={sizeL}
                                onChange={handleOnchangeSizeL}
                            />
                        </div>
                        <div className="size-xl">
                            <p>XL</p>
                            <input
                                type="checkbox"
                                checked={sizeXL}
                                onChange={handleOnchangeSizeXL}
                            />
                        </div>
                    </div>
                </div>
                <button className="create-DS-btn" onClick={handleCreateProduct}>Create</button>
            </div>
        </div>
    );
}

export default Dashboard;