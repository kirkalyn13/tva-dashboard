import Timeline from './Timeline'
import TimeTable from './TimeTable'
import TableHeader from './TableHeader'
import nexusData from "../data/nexus-data.json"

const Dashboard = () => {
    return (
        <div className="container-dashboard">
            <Timeline />
            <div className="container-table">
                <TableHeader />
                <div className="nexus-data">
                {nexusData.map(nexus => {
                    return(
                    <TimeTable 
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
