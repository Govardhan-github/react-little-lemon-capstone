import React from 'react';
import bannerImg from '../assets/restauranfood.jpg';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';    
const Header = () => {
    return (
        <header className='header'>
            <section>

                <div className='banner'>
                    <h1>Little Lemon</h1>
                    <p>Healthy food, happy life</p>
                   <Link to='/booking'>
                   <button aria-label='On Click'>Reserve Table</button>
                   </Link>
                </div>

                <div className='banner-img'>
                    <img src={bannerImg} alt='header' /> 
                </div>
            </section>
        </header>
    );
};


export default Header;  