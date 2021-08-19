import Text from './Text'
import { Link } from 'react-router-dom'

const homeTitle = '"For All Time. Always."'
const homeContent = `Protect the "Sacred Timeline" with the rest of the TVA Team. Monitor Anomalies and Nexus Events from the Sacred Timeline.`
const bulletinTitle = "THE NEXUS BULLETIN"
const bulletinContent = "See the latest Nexus Issues."
const missingLoki = "MISSING VARIANT: LOKI LAUFEYSON"
const detailsLoki = "Variant Loki Laufeyson detained after escaping with the Space Stone. Last seen on a deployed mission to Haven Hills, Alabama (2050) with Agent Mobius M. Mobius and Hunter-B15."
const missingSylvie = "WANTED: UNKNOWN LOKI VARIANT "
const detailsSylvie = "A Unknown Loki Variant is still at large after creating various Nexus Events, and killing a number of TVA hunters."

const Home = () => {
    return (
        <div className="home">
            <video autoplay controls>
                <source src="tva-commercial.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            <Text title={homeTitle} content={homeContent} />
            <nav>
                <Link to="/timeline">
                    <button type="button">View Sacred Timeline</button>
                </Link>
            </nav>
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
