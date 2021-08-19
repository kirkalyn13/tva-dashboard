import ReactApexChart from 'react-apexcharts'

const series = [{
    name: 'The Sacred Timeline',
    data: [0, 0.3, 0.5, 0.1, -0.2, -0.6,0, 0.3, 0.5, 0.1, -0.2, -0.6,0, 0.3, 0.5, 0.1, -0.2, -0.6,0, 0.3, 0.5, 0.1, -0.2, -0.6,0, 0.3, 0.5, 0.1, -0.2, -0.6]
  }, {
    name: 'Nexus Event',
    data: [0, 3.2, null, 0.1, -3.6, null,0, 2.4, null, 0.1, -2.8, null,0, 3.7, null, 0.1, -2.9, null,0, 3.3,null, 0.1, -2.5, null,0, 3.1, null, 0.1, -3.4, null]
  }]
  const options = {
    chart: {
      height: 350,
      type: 'line',
      foreColor: '#FF5722',
      animations: {
        enabled: true,
        easing: 'linear',
        speed: 1000,
        },
    },
    colors: ["#FFFFFF", "#FF5722"],
    dataLabels: {
      enabled: false,
    },
    subtitle:{
        colors: ["#FFFFFF", "#FF5722"]
    },
    stroke: {
      curve: 'smooth',
      colors: ["#FFFFFF", "#FF5722"]
    },
    grid: {
        show: false,
    },
    markers:{
        size: 1,
        colors: "#E64A19"
    },
    xaxis: {
      type: 'date',
      categories: ['1204','1265','1286','1333','1341','1351', '1372','1407','1433','1491','1492','1523','1547','1570','1586','1677', '1777','1825','1907','1938','1939','2054','2082','2090','2095','2112','2157', '2325','2331','2397'],
      labels:{
        style:{
          fontSize: '8px'
        }
      }
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return  val + " anomalies"
        }
      },
    },
  }

  
const Timeline = () => {
    return (
        <div className="container-timeline">
            <ReactApexChart options={options} series={series} type="line" height={350} />
        </div>
    )
}

export default Timeline
