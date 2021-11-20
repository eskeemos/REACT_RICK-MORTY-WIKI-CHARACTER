import React from 'react'

const Navbar = () => {
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark mb-5">
            <div className="container">
                <h1 className="mt-2 navbar-brand text-light">Rick & Morty <span className="text-warning">WiKi</span></h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link text-light" aria-current="page" href="#">Home</a>
                        <a className="nav-link text-light" href="#">Features</a>
                        <a className="nav-link text-light" href="#">Pricing</a>
                        <a className="nav-link disabled text-light">Disabled</a>
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
