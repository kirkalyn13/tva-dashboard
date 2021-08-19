import { Link } from 'react-router-dom'
import '../App.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="img">
            <img src="tva_logo.png" width="130" height="90" alt="logo"/>
            </div>
            <div className="container-nav">
                <nav>
                    <ul>
                        <Link to="/">
                            HOME
                        </Link>
                        <Link to="/timeline">
                            TIMELINE
                        </Link>
                        <Link to="/tva">
                            ABOUT
                        </Link>
                    </ul>
                </nav>
                {/*<div className="foot">
                Copyright © 2021 TVA Dashboard. For personal use. Inspired from "Marvel's Loki". All Rights Reserved.
    </div>*/}
            </div>
        </footer>
    )
}

export default Footer
