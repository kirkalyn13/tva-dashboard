import Members from './Members'
import Text from './Text'

const timeTitle = "The Timeline Restructured"
const timeContent = `Eons ago, countless timelines battled one another for dominance across the Multiverse in a cataclysmic war that nearly resulted in the absolute destruction of existence. To prevent this, the Time-Keepers brought peace and order to the Multiverse by arranging the timelines into a single "Sacred Timeline". In order to preserve the timeline's proper flow, the Time-Keepers then created the Time Variance Authority to police the Multiverse from Variants who create nexus events by stepping off of the path that the Time-Keepers created. If nexus events are left unchecked, the timeline could branch off and lead to another multiversal war.`
const tvaTitle = "The Time Variance Authority"
const tvaContent = `The Time Variance Authority (TVA) is a bureaucratic organization created by the Time-Keepers, tasked with preserving the "Sacred Timeline" and preventing the creation of branching timelines caused by nexus events in accordance with the vision of the Time-Keepers.`



const About = () => {
    return (
        <div className="about">
            <img src="/images/timekeepers.jpg" width="60%" height="500px" position="sticky" alt=""/> 
            <Text title={timeTitle} content={timeContent} />
            <div className="tva-about">
                <img src="tva_logo.png" className="img-members" width="200" height="200" position="sticky" alt=""/>
                <Text title={tvaTitle} content={tvaContent} />
            </div>
            <Members />
        </div>
    )
}

export default About
