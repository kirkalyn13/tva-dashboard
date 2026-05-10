import '../App.css'
import Nav from './Nav'

const Header = () => {
  return (
    <header className="header">
      <img src="tva_logo.png" width="100" height="70" alt="logo" className="img-logo" />
      <h1 className="title">Time Variance Authority</h1>
      <Nav />
    </header>
  )
}

export default Header