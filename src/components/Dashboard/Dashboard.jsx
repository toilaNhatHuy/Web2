import './Dashboard.css';
import React, { useState, useEffect } from 'react';
import * as UserServicesFE from '../servicesFE/UserServicesFE';
import InputComponent from '../Inputform/InputComponent';
function Dashboard() {
    const [error, setError] = useState(null); // Trạng thái để lưu lỗi
    const [data, setData] = useState(null); // Trạng thái để lưu dữ liệu từ API
    const [products, setProducts] = useState([]); // Trạng thái để lưu danh sách sản phẩm
   const [stateProduct,setStateProduct] = useState({
    name:'',
    price:'',
    color:''
   })
    // Lấy tất cả sản phẩm
    const getAllProducts = async () => {
        try {
            const res = await UserServicesFE.GetAllProduct();
            setProducts(res.data.data || []); 
            console.log(res.data.data)// Giả sử API trả về danh sách sản phẩm tại `res.data.products`
        } catch (error) {
            setError({ status: 'ERR', message: 'Failed to fetch products' });
        }
    };
   // Xóa sản phẩm
    const handleDeleteProduct = async (id) => {
        try {
            await UserServicesFE.deleteProduct(id);
            // Cập nhật danh sách sản phẩm sau khi xóa
            setProducts(products.filter(product => product._id !== id));
        } catch (error) {
            setError({ status: 'ERR', message: 'Failed to delete product' });
        }
    };
    // Gọi getAllProducts khi component mount
    useEffect(() => {
        getAllProducts();
    }, []);
   const handleCreateProduct =async() => {
    try {
        const res = await UserServicesFE.createProducts({
            name: stateProduct.name,
            price: stateProduct.price,
            color: stateProduct.color
        });
        console.log(res.data)
        setData(res.data); // Lưu dữ liệu từ API
        if (res.data.status === "ERR") {
            setError(res.data); // Lưu lỗi nếu có
        }
        if(res.data.status === "OK"){
            setError(res.data)
            setStateProduct({ name: '', price: '', color: '' }); // Reset stateProduct
            getAllProducts()
        }
      }catch (error) {
        setError({ status: 'ERR', message: 'An error occurred' }); 
        setError({ status: 'OK', message: 'SIGN UP SUCCESS!' })// Cập nhật lỗi nếu có ngoại lệ
      }
}
   const onFinish = () => {
    getAllProducts()
    handleCreateProduct()
    console.log("finish",stateProduct)
   }
   const handleOnchange = (e) =>{
    setStateProduct({
        ...stateProduct,
        [e.target.name]:e.target.value
    })
   }
    return (
        <div className="Dashboard">
            <div className="dashboard-title">
                <h1>CREATE A NEW PRODUCT</h1>
            </div>
            <div className="Create-Part">
                <div className="Input-DS">
                    <div className="Input-ds">
                        <h4>Name</h4>
                        <InputComponent
                            value={stateProduct.name}
                            type="text"
                            id="InputCreate"
                            placeholder="Name Product"
                            name='name'
                            onChange={handleOnchange}
                        />
                    </div>
                    <div className="Input-ds">
                        <h4>Color</h4>
                        <InputComponent
                            value={stateProduct.color}
                            type="text"
                            id="InputCreate"
                            placeholder="Color"
                            name='color'
                            onChange={handleOnchange}
                        />
                    </div>
                    <div className="Input-ds">
                        <h4>Price</h4>
                        <InputComponent
                            value={stateProduct.price}
                            type="text"
                            id="InputCreate"
                            placeholder="Price"
                            name='price'
                            onChange={handleOnchange}
                        />
                    </div>
                </div>
                    {error && error.status === "ERR" && (
                        <span id="err">{error.message}</span>
                    )}
                <button className="create-DS-btn" onClick={onFinish}>Create</button>
            </div>
            <div className="ProductList">
                <h2>Product List</h2>
                {products.length > 0 ? (
                    <ul className='ulProduct'>
                        {products.map((product, index) => (
                            <li key={index} className='liProduct'>
                                <div className="information">
                                <strong>Name: {product.name}</strong>
                                <strong>Price: {product.price}</strong>
                                <strong>Color: {product.color}</strong>
                                </div>
                                <button onClick={() => handleDeleteProduct(product._id)}>X</button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No products available.</p>
                )}
            </div>
        </div>
    );
}

export default Dashboard;