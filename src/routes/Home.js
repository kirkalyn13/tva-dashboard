import { Bulletin } from '../components/Bulletin'
import Hero from '../components/Hero'
import Text from '../components/Text'
import { Link } from 'react-router-dom'

const homeTitle = '"For All Time. Always."'
const homeContent = `The Time Variance Authority exists outside of time and space, tasked with the sacred duty of preserving the one true timeline. As an agent of the TVA, you are the last line of defense against Variants, Nexus Events, and the branching chaos that threatens to unravel the very fabric of reality.\nMonitor anomalies as they emerge across centuries. Track Nexus Events before they branch. Work alongside your fellow agents to prune what must be pruned and protect what must be protected.\nThe Sacred Timeline is not just a record of what has happened — it is the guarantee of what must happen. Every deviation, no matter how small, is a threat. Every branch left unchecked is a universe that should not exist.\nStay vigilant. Stay aligned. For all time. Always.`

const Home = () => {
    return (
        <div className="home space-background">
            <Hero title={homeTitle} content={homeContent} />
            <div className="hero">
                <Text title={homeTitle} content={homeContent} />
                <nav>
                    <Link to="/timeline" className="cta">
                        VIEW SACRED TIMELINE
                    </Link>
                </nav>
            </div>
            <Bulletin />
        </div>
    )
}

export default Home
