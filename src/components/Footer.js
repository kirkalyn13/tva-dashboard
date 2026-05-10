import { Link } from 'react-router-dom'
import '../App.css'

const Footer = () => {
  return (
    <footer className="footer">
      <img src="tva_logo.png" width="100" height="70" alt="logo" className="img-logo" />
      <nav className="container-nav">
        <Link to="/">HOME</Link>
        <Link to="/timeline">TIMELINE</Link>
        <Link to="/tva">ABOUT</Link>
      </nav>
    </footer>
  )
}

export default Footer