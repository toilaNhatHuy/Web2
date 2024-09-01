import './Navbar.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Navbar() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleSearch = async (e) => {
        e.preventDefault();

        const options = {
            method: 'GET',
            url: 'https://asos10.p.rapidapi.com/api/v1/test',
            params: {
                q: query,
                limit: '10',
            },
            headers: {
                'x-rapidapi-host': 'asos10.p.rapidapi.com',
                'x-rapidapi-key': 'ab6615eb34mshab4d88500a243d1p1087f1jsnc6e0c18956ab'
            },
        };

        try {
            const response = await axios.request(options);
            const products = response.data.products;
            setResults(Array.isArray(products) ? products : []);
        } catch (error) {
            console.error(error);
        }
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(prev => !prev);
    };

    return (
        <div className="navbar">
            <ul>
                <li><img id="logo" src='https://scontent.xx.fbcdn.net/v/t1.15752-9/454887513_342717868807516_7391926271869795433_n.png?_nc_cat=110&ccb=1-7&_nc_sid=0024fc&_nc_ohc=uqyQ829PEaIQ7kNvgGl9zLP&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QHZVtdk3G4Mk768T6KJ888D3HTYJdLQ6vcV2PsTRril7w&oe=66F561E2' alt="Logo" /></li>
                <li><Link id="dashboard" to="/dashboard">DASHBOARD</Link></li>
                <li><Link id="home" to="/">HOME</Link></li>
                <li 
                    id="products" 
                    onClick={toggleDropdown}
                >
                    <Link to="">
                        PRODUCTS ‏‏‎ ‎ <i className="fa-solid fa-caret-down"></i>
                    </Link>
                    {isDropdownOpen && (
                        <ul className="dropdown-menu">
                            <li id = "dropdown-tshirt"><Link to="/products">T-Shirts</Link></li>
                            <li><Link to="/products2">Hoodies</Link></li>
                            <li><Link to="/products4">Tank Tops</Link></li>
                            <li><Link to="/products3">Sweaters</Link></li>
                        </ul>
                    )}
                </li>
                <li><Link id="about-us" to="/aboutus">ABOUT US</Link></li>
                <li><Link id="sign-in" to="/signin">SIGN IN</Link></li>
                <li><Link id="sign-up" to="/signup">SIGN UP</Link></li>
                <form className="search-bar" onSubmit={handleSearch}>
                    <li>
                        <input 
                            id="search" 
                            type="text" 
                            placeholder='Search...' 
                            value={query} 
                            onChange={(e) => setQuery(e.target.value)} 
                        />
                    </li>
                    <button type='submit' id="search-icon">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
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
                            <p></p>
                        )}
                    </div>
                </form>
                <li><Link id="cart" to="/cart"><i className="fa-solid fa-cart-shopping"></i></Link></li>
            </ul>
        </div>
    );
}

export default Navbar;
