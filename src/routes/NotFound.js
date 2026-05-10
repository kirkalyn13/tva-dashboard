import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="not-found space-background">
        <div className="container-text">
            <img src="/miss-minutes.png" alt="Miss Minutes" width="300" height="300" />
            <h2>Looks like you've created a Nexus Event.</h2>
            <p>This page doesn't exist on the Sacred Timeline.</p>
            <Link to="/" className="return">
                Return to the Timeline
            </Link>
        </div>
    </div>
  )
}

export default NotFound