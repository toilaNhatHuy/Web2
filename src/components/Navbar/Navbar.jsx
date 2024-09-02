import './Navbar.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar({ products }) {
    const productsearch = [{  id: 1,
        name: "Men's Checkered Long Sleeve Button Shirt",
        mainImg: "https://i.pinimg.com/736x/ab/44/73/ab44736245c77fe9bd1e88ed3c659f6a.jpg",
    },
    {
        id: 2,
        name: "Aelfric Eden Corduroy Plaid Fake Two Jacket",
        mainImg: "https://www.aelfriceden.com/cdn/shop/files/ff2e5330fbded4e46a9c51e24fe9d487_0d5bbd92-e32c-4934-bca3-c38fd6344bca.jpg?v=1716550710&width=700",
    },
    {
        id: 3,
        name: "Minaka Long Sleeve Button Shirt",
        mainImg: "https://i.pinimg.com/736x/11/cb/44/11cb445863666f6e300d54d1738f63a5.jpg?fbclid=IwZXh0bgNhZW0CMTEAAR03o4qasdK78rvyQ8Dw-DEB9sN-XRLCtMUYSOhPl2bywdpcHlT3J2EC11A_aem_5q19ckyflqDb52uiYVLr8A",
    },
    {
        id: 4,
        name: "White Striped T-shirt",
        mainImg: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lqu9g3mcfp21e5",
    },
    {
        id: 5,
        name: "Aqua Checkered Long Sleeve Button Shirt",
        mainImg: "https://i.pinimg.com/736x/05/06/14/050614405263341552bd1a7d9fc7466c.jpg?fbclid=IwZXh0bgNhZW0CMTEAAR0wjfJ4am7eJURuJDZfVBRJON4Qb9dp2DxMZ_rIMc3ATNnhD3OAqEBtMv0_aem_6jU93gZyXEvldFe6KKjtig",
    },
    {
        id: 6,
        name: "Red Striped Shirt",
        mainImg: "https://i.pinimg.com/736x/55/56/b9/5556b9ab637eae7a6816c20460af5189.jpg?fbclid=IwZXh0bgNhZW0CMTEAAR22HN_d9NURHlczbxVB6N2rTH3IHZrJoMRTILwbZyYUEZoVS57xshEFbS8_aem_tP8Q0Ujq57XkiyzbX8jfvw",
         },

        {
            id: 7,
            name: "Hombres Capucha térmica",
            mainImg: "https://i.pinimg.com/736x/e1/3f/17/e13f1765e6560f9749d312100026834e.jpg",
        },
        {
            id: 8,
            name: "Contrast Color Pullover Hoodie Mens",
            mainImg: "https://i.pinimg.com/736x/12/88/63/128863c4c327c466728ebe7babd41196.jpg",
            
        },
        {
            id: 9,
            name: "Waffle Pattern Hoodie",
            mainImg: "https://i.pinimg.com/736x/42/41/f1/4241f1a00b71ef6159adbb02326c46a3.jpg",
            
        },
        {
            id: 10,
            name: "Men's New York Hoodies",
            mainImg: "https://i.pinimg.com/736x/0e/25/1e/0e251e9e3f57d53b6d13a9c1e9be355b.jpg",
        },
        {
            id: 11,
            name: "Color Block Sleeve Hoodies",
            mainImg: "https://i.pinimg.com/736x/e0/73/37/e0733752f60f259cd3a47e35cfc1c3d5.jpg",
        },
        {
            id: 12,
            name: "Aonga - Hoodie for Men",
            mainImg: "https://i.pinimg.com/736x/31/92/d4/3192d43791a6b5c0eea11327b2a17446.jpg",
        },
        {
            id: 13,
            name: "Pull Lapin Motifs Japonais 'Saitama'",
            mainImg: "https://i.pinimg.com/736x/6d/d4/ee/6dd4eee674ddbf9c417d605061b94381.jpg",
        },
        {
            id: 14,
            name: "Herren Strickpullover mit Katzenmuster",
            mainImg: "https://i.pinimg.com/736x/1d/19/25/1d1925a7ab9a6abc6ec4c10430499e7a.jpg",
        },
        {
            id: 15,
            name: "Stylish Letter Knitted Sweater",
            mainImg: "https://i.pinimg.com/736x/1e/49/08/1e490818c8c2dfa6e7196d70081f5e80.jpg",
        },
        {
            id: 16,
            name: "Oversized Skeleton Knit Sweater",
            mainImg: "https://i.pinimg.com/736x/92/bf/81/92bf8187481ef3fa36c0fa81dbeb57c0.jpg",
        },
        {
            id: 17,
            name: "Special Blue Sweater",
            mainImg: "https://i.pinimg.com/736x/6b/17/16/6b17161cdc7b538ed89062f9c36c81f9.jpg",
            
        },
        {
            id: 18,
            name: "Magnificent colorful sweater",
            mainImg: "https://i.pinimg.com/736x/79/e3/3e/79e33e59ecb2c928f73df3b92bc829f6.jpg",
        },
        {
            id: 19,
            name: "Men's Kristina Ribbed Brami",
            mainImg: "https://i.pinimg.com/736x/98/b1/63/98b1636d8fc2af22e8a2a60591ff7977.jpg",
        },
        {
            id: 20,
            name: "Unique Tank Top",
            mainImg: "https://i.pinimg.com/736x/db/c1/f2/dbc1f2abe98647b4fd0929f18cd2a9ef.jpg",
        },
        {
            id: 21,
            name: "Popular Tank Top",
            mainImg: "https://i.pinimg.com/736x/c8/93/49/c89349195dc5d82123fd6c7cfe966385.jpg",
        },
        {
            id: 22,
            name: "Our Brand New Tank Top",
            mainImg: "https://i.pinimg.com/736x/64/71/4c/64714c37d5a0588a76667686c381450d.jpg",
        },
        {
            id: 23,
            name: "BASIQUINHAS",
            mainImg: "https://i.pinimg.com/736x/65/e3/3f/65e33f819e6b60ff3e124a6093b698aa.jpg",
        },
        {
            id: 24,
            name: "Body Duda",
            mainImg: "https://i.pinimg.com/736x/d1/2d/51/d12d51b4af060da7ad673d225e028db7.jpg",
        }]



    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if(query.trim() === '') {
            setResults([])
            return
        }


        const filteredResults = productsearch.filter(products =>
            products.name.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filteredResults);
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
                            <li id="dropdown-tshirt"><Link to="/products">T-Shirts</Link></li>
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
                    <input 
                        id="search" 
                        type="text" 
                        placeholder='Search...' 
                        value={query} 
                        onChange={handleInputChange} 
                    />
                    <button id="search-icon" type="submit">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </form>
                <li><Link id="cart" to="/cart"><i className="fa-solid fa-cart-shopping"></i></Link></li>
            </ul>
            {results.length > 0 && query.trim !== '' && (
                
                    <div className="search-results">
                        <ul>
                            {results.map((product) => (
                                <li key={product.id}>
                                    <Link to = {`/detail/${product.id}`}>
                                        <img src={product.mainImg} alt={product.name} />
                                        <p>{product.name}</p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                
            )}
        </div>
    );
}

export default Navbar;