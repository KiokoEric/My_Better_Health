import React from 'react';
import { useState } from 'react';
import "../Header/Header.css"
import Header_Logo from "../../Images/Header_Logo.webp";
import { Link } from 'react-router-dom';

const Header = () => {

    const [ExtendNavbar,setExtendNavbar ] = useState(true) 

return (
    <div className='Header' >
        <section>
                <Link to="/" className='Link' >
                    <figure>
                        <img src={Header_Logo} alt="" width="45px" />
                        <figcaption>
                            <h1 className='Title'>Better Health</h1>
                        </figcaption>
                    </figure>
                </Link>
        </section>
        <section>
            <nav className={ExtendNavbar ? "CloseNavigation" : "OpenNavigation" } onClick={() => setExtendNavbar(false)} > 
                <Link to="/" className='Link Navigation'>Home</Link> 
                <Link to="/Exercise" className='Link Navigation'>Exercise</Link>
                <Link to="/Nutrition" className='Link Navigation'>Nutrition</Link>
                <Link to="/Recipe" className='Link Navigation'>Recipe</Link>
                <Link to="/Fitness_Calculator" className='Link Navigation'>Fitness Calculator</Link>
                <Link to="/Favourites" id='Favourites' className='Link Navigation'>Favourites</Link>
            </nav>
        </section>
        <section>
            <figure onClick={()=> {setExtendNavbar((curr) => !curr)}}>
                {ExtendNavbar ?    <i  id="Bars" class="fa-solid fa-bars"></i> : <i id='Bars' class="fa-solid fa-xmark"></i> }
            </figure>
            <button>
                <Link to="/Favourites" className='Favourites'> <i class="fa-solid fa-bookmark"></i> Favourite Exercises</Link>
            </button>
        </section>
    </div>
)
}

export default Header 