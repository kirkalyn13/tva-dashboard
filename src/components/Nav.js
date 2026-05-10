import { Link } from 'react-router-dom'

const Nav = ({ onLinkClick }) => (
  <nav className="container-nav">
    <Link to="/" onClick={onLinkClick}>HOME</Link>
    <Link to="/timeline" onClick={onLinkClick}>TIMELINE</Link>
    <Link to="/tva" onClick={onLinkClick}>ABOUT</Link>
  </nav>
)

export default Nav