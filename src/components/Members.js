import Text from "./Text"

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
const membersTitle = "The TVA  Authorities"
const membersContent = `The Time Variance Authority is upheld by an elite corps of agents, analysts, and hunters — each hand-selected and trained to neutralize temporal threats with precision and authority. Below are the active senior personnel currently overseeing Sacred Timeline operations. These individuals have logged more pruning missions, variant detainments, and nexus interventions than any other operatives in TVA record.`

const Members = () => {
  return (
    <div className="container-members">
        <Text title={membersTitle} content={membersContent} />
        <div className="members">
            <div className="member">
                <img src="/images/judge_renslayer.png" className="img-members" width="200" height="200" position="sticky" alt=""/> 
                <Text title={ravonnaTitle} content={ravonnaContent} />
            </div>
            <div className="member">
                <img src="/images/mobius_m_mobius.png" className="img-members" width="200" height="200" position="sticky" alt=""/> 
                <Text title={mobiusTitle} content={mobiusContent} />
            </div>
            <div className="member">
                <img src="/images/ms_minutes.png" className="img-members" width="200" height="200" position="sticky" alt=""/> 
                <Text title={msMinutesTitle} content={msMinutesContent} />
            </div>
            <div className="member">
                <img src="/images/hunter_B15.png" className="img-members" width="200" height="200" position="sticky" alt=""/> 
                <Text title={hunterTitle} content={hunterContent} />
            </div>
            <div className="member">
                <img src="/images/casey.png" className="img-members" width="200" height="200" position="sticky" alt=""/> 
                <Text title={clerkTitle} content={clerkContent} />
            </div>
        </div>
    </div>
  )
}

export default Members