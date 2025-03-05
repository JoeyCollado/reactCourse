import {Line} from 'react-chartjs-2'
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, //x axis
  LinearScale, // y axis
  PointElement, // dots
  Legend,
  Tooltip
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale, 
  LinearScale, 
  PointElement,
  Legend,
  Tooltip
)
 


const App = () => {

  const data = {
    labels: ['mon', 'tue', 'wed'],
    datasets: [
      {
        label: 'Sales of Week',
        data: [6,3,9],
        backgroundColor: 'aqua',
        borderColor: 'black',
        pointBorderColor: 'red',
        fill: true,
        tension: 0.4
        
      }
    ]
  }


  const options = {
    plugins: {
      legend: true

    },
    scales: {
      y:{
      // min: 3,
      // max: 6
      }
    }
  }
  return (
    <div className='flex'>
      <h1 className=''>Line Chart</h1>
      <div className='w-96 h-48 p-5'>
      <Line data={data} options={options}>

      </Line>
      </div>
    </div>
  )
}

export default App
