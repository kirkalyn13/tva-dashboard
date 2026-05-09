import Hero from './Hero'
import Text from './Text'
import { Link } from 'react-router-dom'

const homeTitle = '"For All Time. Always."'
const homeContent = `The Time Variance Authority exists outside of time and space, tasked with the sacred duty of preserving the one true timeline. As an agent of the TVA, you are the last line of defense against Variants, Nexus Events, and the branching chaos that threatens to unravel the very fabric of reality.\nMonitor anomalies as they emerge across centuries. Track Nexus Events before they branch. Work alongside your fellow agents to prune what must be pruned and protect what must be protected.\nThe Sacred Timeline is not just a record of what has happened — it is the guarantee of what must happen. Every deviation, no matter how small, is a threat. Every branch left unchecked is a universe that should not exist.\nStay vigilant. Stay aligned. For all time. Always.`
const bulletinTitle = "THE NEXUS BULLETIN"
const bulletinContent = `Your centralized briefing on the latest confirmed Nexus Events across the Sacred Timeline. Updated in real time as our analysts process incoming anomaly reports from every corner of known history — past, present, and future.`
const missingLoki = "MISSING VARIANT: LOKI LAUFEYSON"
const detailsLoki = "Variant Loki Laufeyson detained after escaping with the Space Stone. Last seen on a deployed mission to Haven Hills, Alabama (2050) with Agent Mobius M. Mobius and Hunter-B15."
const missingSylvie = "WANTED: UNKNOWN LOKI VARIANT "
const detailsSylvie = "A Unknown Loki Variant is still at large after creating various Nexus Events, and killing a number of TVA hunters."

const Home = () => {
    return (
        <div className="home">
            <Hero title={homeTitle} content={homeContent} />
            <div className="hero">
                <Text title={homeTitle} content={homeContent} />
                <nav>
                    <Link to="/timeline">
                        <button type="button">View Sacred Timeline</button>
                    </Link>
                </nav>
            </div>
            <div className="container-bulletin">
                <img src="tva_logo.png" className="img-members" width="200" height="200" position="sticky" alt=""/>
                <Text title={bulletinTitle} content={bulletinContent} />
            </div>
            <div className="bulletin">
                <div className="bulletin-item">
                    <img src="/images/loki.jpg" className="img-members" width="300" height="300" position="sticky" alt=""/> 
                    <Text title={missingLoki} content={detailsLoki} />
                </div>
                <div className="bulletin-item">
                    <img src="/images/sylvie.png" className="img-members" width="300" height="300" position="sticky" alt=""/> 
                    <Text title={missingSylvie} content={detailsSylvie} />
                </div>
            </div>
        </div>
    )
}

export default Home
