import "./chart.scss"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Link } from "react-router-dom";

const data = [
  {
    name: 'Mon',
    Step_Count: 6000,
    amt: 6000,
  },
  {
    name: 'Tues',
    Step_Count: 2500,
    amt: 7000,
  },
  {
    name: 'Wed',
    Step_Count: 6000,
    amt: 8000,
  },
  {
    name: 'Thur',
    Step_Count: 10000,
    amt: 9000,
  },
  {
    name: 'Fri',
    Step_Count: 1000,
    amt: 10000,
  },
  {
    name: 'Sat',
    Step_Count: 12000,
    amt: 11000,
  },
  {
    name: 'Sun',
    Step_Count: 6000,
    amt: 12000,
  },
  
];
const Chart = ({aspect}) => {
  return (
    <div className="chart">
      <div className="title">Weekly Step Count</div>
      <Link to="/" style={{ textDecoration: "none" }}>
        <button >Dashboard</button>
        </Link>
     <ResponsiveContainer width="100%" aspect={aspect}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Step_Count" fill="#0080ff" />
          
        </BarChart>
      </ResponsiveContainer>
          
    </div>
  )
}

export default Chart
