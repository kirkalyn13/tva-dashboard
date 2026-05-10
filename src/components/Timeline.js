import { useEffect, useRef } from 'react'
import ApexCharts from 'apexcharts'

const series = [
  {
    name: 'The Sacred Timeline',
    data: [0,0.3,0.5,0.1,-0.2,-0.6,0,0.3,0.5,0.1,-0.2,-0.6,0,0.3,0.5,0.1,-0.2,-0.6,0,0.3,0.5,0.1,-0.2,-0.6,0,0.3,0.5,0.1,-0.2,-0.6,0,0.3,0.5,0.1,-0.2,-0.6,0,0.3,0.5,0.1,-0.2,-0.6,0,0.3,0.5,0.1,-0.2,-0.6,0,0.3,0.5,0.1,-0.2,-0.6,0,0.3,0.5,0.1,-0.2,-0.6]
  },
  {
    name: 'Nexus Event',
    data: [0,3.2,null,0.1,-3.6,null,0,2.4,null,0.1,-2.8,null,0,3.7,null,0.1,-2.9,null,0,3.3,null,0.1,-2.5,null,0,3.1,null,0.1,-3.4,null,0,3.2,null,0.1,-3.6,null,0,2.4,null,0.1,-2.8,null,0,3.7,null,0.1,-2.9,null,0,3.3,null,0.1,-2.5,null,0,3.1,null,0.1,-3.4,null]
  }
]

const options = {
  series,
  chart: {
    height: 400,
    type: 'line',
    foreColor: '#FF5722',
    background: 'transparent',
    animations: {
      enabled: true,
      easing: 'linear',
      speed: 1000,
    },
    toolbar: {
      show: true,
      tools: {
        download: false,
        selection: true,
        zoom: true,
        zoomin: true,
        zoomout: true,
        pan: true,
        reset: true
      }
    },
    zoom: {
      enabled: true,
      type: 'x',
      autoScaleYaxis: true
    }
  },
  colors: ['#FFFFFF', '#FF5722'],
  dataLabels: { enabled: false },
  stroke: {
    curve: 'smooth',
    colors: ['#FFFFFF', '#FF5722']
  },
  grid: { show: false },
  markers: {
    size: 1,
    colors: '#E64A19'
  },
  xaxis: {
    type: 'category',
    categories: ["0800","0900","1001","1095","1150","1204","1215","1241","1265","1286","1300","1333","1341","1348","1351","1372","1400","1407","1433","1450","1491","1492","1503","1523","1547","1564","1570","1586","1600","1642","1677","1700","1740","1777","1789","1815","1825","1848","1863","1886","1907","1912","1938","1939","1940","1945","1953","1962","1963","1969","1975","2054","2082","2090","2095","2112","2157","2325","2331","2397"],
    labels: {
      style: { fontSize: '8px' }
    }
  },
  tooltip: {
    y: {
      formatter: (val) => val + ' anomalies'
    }
  },
  annotations: {
    yaxis: [
      {
        y: 1,
        borderColor: '#FF4D6D',
        borderWidth: 2,
        strokeDashArray: 0,
        label: {
          style: {
            color: '#ffffff',
            background: '#FF4D6D',
            fontSize: '10px',
            fontWeight: 600
          }
        }
      },
      {
        y: -1,
        borderColor: '#FF4D6D',
        borderWidth: 2,
        strokeDashArray: 0,
        label: {
          style: {
            color: '#ffffff',
            background: '#FF4D6D',
            fontSize: '10px',
            fontWeight: 600
          }
        }
      }
    ]
  }
}

const Timeline = () => {
  const chartRef = useRef(null)

  useEffect(() => {
    const chart = new ApexCharts(chartRef.current, options)
    chart.render()
    return () => chart.destroy()
  }, [])

  return (
    <div className="container-timeline">
      <div ref={chartRef} />
    </div>
  )
}

export default Timeline