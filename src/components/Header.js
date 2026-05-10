import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import Nav from './Nav'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header" style={{ position: 'relative', overflow: 'visible' }}>
      <Link to="/" className="logo">
        <img src="tva_logo.png" width="70" height="50" alt="logo" className="img-logo" />
      </Link>
      <h1 className="title app-title">Time Variance Authority</h1>
      <Nav />
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link>
          <Link to="/timeline" onClick={() => setMenuOpen(false)}>TIMELINE</Link>
          <Link to="/tva" onClick={() => setMenuOpen(false)}>ABOUT</Link>
        </div>
      )}
    </header>
  )
}

export default Header