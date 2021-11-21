import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark mb-5">
            <div className="container">
                <Link to="/" className="mt-2 navbar-brand text-light">
                    Rick & Morty <span className="text-warning">WiKi</span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <style>
                        {`
                        button[aria-expanded="false"] > .close{
                            display:none;
                        }
                        button[aria-expanded="true"] > .open{
                            display:none;
                        }
                        .active{
                            color:red;
                        }
                        `}
                    </style>
                    <i class="fas fs-3 text-light fa-bars open"></i>
                    <i class="fas fs-3 text-light fa-window-close close"></i>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink to="" className="nav-link text-light" activeClassName="active" aria-current="page" href="#">Characters</NavLink>
                        <NavLink to="/episodes" className="nav-link text-light" href="#">Episodes</NavLink>
                        <NavLink to="/location" className="nav-link text-light" href="#">Location</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}


{/* 
<div className="container d-flex justify-content-center">
    <Search setsearch={setsearch} setpage={setpage}/>
</div> */}

export default Navbar
