import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="not-found space-background">
      <div className="container-text">
        <img src="/miss-minutes.png" alt="Miss Minutes" width="300" height="300" />
        <h2>Looks like you've created a Nexus Event.</h2>
        <p>This page doesn't exist on the Sacred Timeline.</p>
        <Link to="/">
          <button type="button">Return to the Timeline</button>
        </Link>

        <Link
          to="/world-tree"
          style={{
            marginTop: '60px',
            opacity: 0.08,
            fontSize: '10px',
            letterSpacing: '2px',
            color: '#4CAF50',
            background: 'transparent',
            border: 'none',
            cursor: 'default',
          }}
        >
          ᛃ
        </Link>
      </div>
    </div>
  )
}

export default NotFound