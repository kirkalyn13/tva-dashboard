import Timeline from '../components/Timeline'
import TimeTable from '../components/TimeTable'
import TableHeader from '../components/TableHeader'
import nexusData from "../data/nexus-data.json"

const Dashboard = () => {
    return (
        <div className="container-dashboard">
            <Timeline />
            <div className="container-table">
                <TableHeader />
                <div className="nexus-data">
                {nexusData.map((nexus,key) => {
                    return(
                    <TimeTable
                    key={key} 
                    eventNum={nexus.eventNum}
                    date={nexus.date}
                    time={nexus.time}
                    location={nexus.location}/>)
                })}
                </div>
            </div>
        </div>
    )
}

export default Dashboard
