import { Link } from 'react-router-dom'

export const Nav = () => (
  <nav className="container-nav">
    <Link to="/">HOME</Link>
    <Link to="/timeline">TIMELINE</Link>
    <Link to="/tva">ABOUT</Link>
  </nav>
)
export default Nav