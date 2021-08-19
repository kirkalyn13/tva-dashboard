import Text from './Text'

const timeTitle = "The Timeline Restructured"
const timeContent = `Eons ago, countless timelines battled one another for dominance across the Multiverse in a cataclysmic war that nearly resulted in the absolute destruction of existence. To prevent this, the Time-Keepers brought peace and order to the Multiverse by arranging the timelines into a single "Sacred Timeline". In order to preserve the timeline's proper flow, the Time-Keepers then created the Time Variance Authority to police the Multiverse from Variants who create nexus events by stepping off of the path that the Time-Keepers created. If nexus events are left unchecked, the timeline could branch off and lead to another multiversal war.`
const tvaTitle = "The Time Variance Authority"
const tvaContent = `The Time Variance Authority (TVA) is a bureaucratic organization created by the Time-Keepers, tasked with preserving the "Sacred Timeline" and preventing the creation of branching timelines caused by nexus events in accordance with the vision of the Time-Keepers.`
const ravonnaTitle = "Judge Renslayer"
const ravonnaContent = `Ravonna Lexus Renslayer is a judge of the Time Variance Authority. Created by the Time-Keepers, Renslayer decides the punishments given to beings who break or split the "Sacred Timeline", as she did when a variant of Loki was brought before her for trial.`
const mobiusTitle = "Agent Mobius"
const mobiusContent = `Agent Mobius M. Mobius is a high-ranking member of the Time Variance Authority who specializes in the investigation and analysis of particularly dangerous time criminals. After beginning an assignment to investigate a variant of Loki who had been killing TVA agents, Mobius recruited another Loki variant in the hopes that he could help the organization stop his alternate self.`
const msMinutesTitle = "Miss Minutes"
const msMinutesContent = `Miss Minutes is the artificially intelligent animated mascot of the Time Variance Authority. Miss Minutes is most of the time cheerful, polite and well-spoken. She is loyal to the Time Variance Authority and informative toward Variants. `
const clerkTitle = "TVA Clerical Team"
const clerkContent = `The TVA is equipped with variuos employees provisioning the "Sacred Timeline" violators. Collecting and filing of evidences such as dangerous use of Infinity Stones are managed by the Evidence Filing Desk. Records are also stored, monitored and maintain in a library for future reference.`
const hunterTitle = "TVA Task Force"
const hunterContent = `In order to maintain and protect the "Sacred Timeline", the TVA organized a task force of minutemen and hunters to track down and immobilized rogue entities known as "Variants" causing Nexus Events. Their task is to hunt and prune the Variants to restore that timeline in accordance to the timekeeper's design.`


const About = () => {
    return (
        <div className="about">
            <img src="/images/timekeepers.jpg" width="60%" height="500px" position="sticky" alt=""/> 
            <Text title={timeTitle} content={timeContent} />
            <div className="tva-about">
                <img src="tva_logo.png" className="img-members" width="200" height="200" position="sticky" alt=""/>
                <Text title={tvaTitle} content={tvaContent} />
            </div>
            <div className="container-members">
            <div className="members">
                <img src="/images/judge_renslayer.png" className="img-members" width="200" height="200" position="sticky" alt=""/> 
                <Text title={ravonnaTitle} content={ravonnaContent} />
            </div>
            <div className="members">
                <img src="/images/mobius_m_mobius.png" className="img-members" width="200" height="200" position="sticky" alt=""/> 
                <Text title={mobiusTitle} content={mobiusContent} />
            </div>
            <div className="members">
                <img src="/images/ms_minutes.png" className="img-members" width="200" height="200" position="sticky" alt=""/> 
                <Text title={msMinutesTitle} content={msMinutesContent} />
            </div>
            <div className="members">
                <img src="/images/hunter_B15.png" className="img-members" width="200" height="200" position="sticky" alt=""/> 
                <Text title={hunterTitle} content={hunterContent} />
            </div>
            <div className="members">
                <img src="/images/casey.png" className="img-members" width="200" height="200" position="sticky" alt=""/> 
                <Text title={clerkTitle} content={clerkContent} />
            </div>
            </div>
        </div>
    )
}

export default About
