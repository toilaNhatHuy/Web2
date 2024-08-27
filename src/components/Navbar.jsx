import './Navbar.css'
import {Routes, Route, Link} from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Navbar() {
  // const [input, setInput] = useState("");

  // const fetchData = (value) => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //   .then((response) => response.json())
  //   .then((json) => {
  //       const results = json.filter((user) => {
  //       return (
  //         value &&
  //         user &&
  //         user.name &&
  //         user.name.toLowerCase().includes(value)
  //       );
        
  //     });
  //     console.log(results);
  //   }); 
  // };

  // const handleChange = (value) => {
  //   setInput(value)
  //   fetchData(value)
  // }
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);


  const handleSearch = async (e) => {
    e.preventDefault();

    const options = {
      method: 'GET',
      url: 'https://asos10.p.rapidapi.com/api/v1/test',
      params: {
        q: query, // từ khóa tìm kiếm
        limit: '10', // số lượng kết quả trả về
      },
      headers: {
        'x-rapidapi-host': 'asos10.p.rapidapi.com',
        'x-rapidapi-key': 'ab6615eb34mshab4d88500a243d1p1087f1jsnc6e0c18956ab'
      },
    };

    // try {
    //   const response = await axios.request(options);
    //   const products = response.data.products;
  
    //   // Đảm bảo `products` là một mảng trước khi gọi `setResults`
    //   setResults(Array.isArray(products) ? products : []);
    // } catch (error) {
    //   console.error(error);
    // }


  };


  return (
    <div className="navbar">
                <ul>
                    <li><img id="logo"></img></li>
                    <li><Link id="home" to="/">HOME</Link></li>
                    <li><Link id = "products" to="/products">PRODUCTS</Link></li>
                    <li><Link id = "about-us" to="/aboutus">ABOUT US</Link></li>
                    <li><Link id = "sign-in" to="/signin">SIGN IN</Link></li>
                    <li><Link id = "sign-up" to="/signup">SIGN UP</Link></li>
                    <form className="search-bar" onSubmit={handleSearch}>
                        <li><a href="#"><input id="search" type="text" placeholder='Search...' value={query} onChange={(e) => setQuery(e.target.value)} /></a></li>
                        <button type='submit' id = "search-icon"><i className="fa-solid fa-magnifying-glass"></i></button>
                        <div>
                          {results.length > 0 ? (
                            <ul>
                                {results.map((product) => (
                                  <li key={product.id}>
                                    <h2>{product.name}</h2>
                                    <p>{product.price.current.text}</p>
                                    <img src={`https://${product.imageUrl}`} alt={product.name} />
                                  </li>
                                ))}
                            </ul>
                            ) : (
                              <p>No results found.</p>
                            )}
                      </div>
                        
                    </form>
                    <li><Link id="cart" to="#"><i className="fa-solid fa-cart-shopping"></i></Link></li>
                </ul>
            </div>


  )
}

export default Navbar