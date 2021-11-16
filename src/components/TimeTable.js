

const TimeTable = ({eventNum, date, time, location}) => {
    return (
        <>
            <table className="table-data">
                <tbody>
                <tr>
                    <td>{eventNum}</td>
                    <td>{date}</td>
                    <td>{time}</td>
                    <td>{location}</td>     
                </tr>  
                </tbody>     
            </table>
        </>
    )
}

export default TimeTable
