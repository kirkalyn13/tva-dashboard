import { Link } from 'react-router-dom'
import '../App.css'

const Footer = () => {
  return (
    <footer className="footer">
      <Link to="/" className="logo">
        <img src="tva_logo.png" width="70" height="50" alt="logo" className="img-logo" />
      </Link>
      <nav className="container-nav">
        <Link to="/">HOME</Link>
        <Link to="/timeline">TIMELINE</Link>
        <Link to="/tva">ABOUT</Link>
      </nav>
    </footer>
  )
}

export default Footer