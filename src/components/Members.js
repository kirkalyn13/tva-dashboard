import Text from "./Text"
import Member from "./Member"
import members from '../data/members.json'

const membersTitle = "The TVA  Authorities"
const membersContent = `The Time Variance Authority is upheld by an elite corps of agents, analysts, and hunters — each hand-selected and trained to neutralize temporal threats with precision and authority. Below are the active senior personnel currently overseeing Sacred Timeline operations. These individuals have logged more pruning missions, variant detainments, and nexus interventions than any other operatives in TVA record.`

const Members = () => {
  return (
    <div className="container-members">
        <Text title={membersTitle} content={membersContent} />
        <div className="members">
            {members.map(member => <Member title={member.title} content={member.content} imageSrc={member.imageSrc}/>)}
        </div>
    </div>
  )
}

export default Members