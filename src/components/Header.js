import React from 'react'
import '../App.css';

const Header = () => {
    return (
        <>
        <header className='header'>
            <div className="img">
            <img src="tva_logo.png" width="130" height="90" alt="logo"/>
            </div>
          <h1 className='title'>Time Variance Authority</h1>
        <div className="container-nav"></div>
        </header>
        </>
    )
}

export default Header
