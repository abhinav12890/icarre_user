import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import "./home.scss"
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
const Home = () => {
  return (
    <div className='home'>
      <Sidebar/> 
      <div className="homeContainer">
        <Navbar/>
        <div className="widgets">
          <Widget type="user"/>
          <Widget type="info"/>
        </div>
        <div className="charts">
          <Featured/>
          <Chart aspect={2 / 1} />
        </div>
      </div>
    </div>
  )
}

export default Home
