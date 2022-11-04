import "./widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonIcon from '@mui/icons-material/Person';
import StorageIcon from '@mui/icons-material/Storage';

const Widget = ({type}) => {
    let data;
    const amt=100;
    const diff=20;
    switch(type){
        case "user":
            data = {
                title:"USERS",
                link:"See all users",
                icon:<PersonIcon className="icon" style={{
                    color:"crimson",
                    backgroundColor: "rgba(255, 0, 0, 0.2)",
                }} />,  
            }
            break;
        case "info":
            data = {
                title:"Records",
                link:"View all records",
                icon:<StorageIcon className="icon"  style={{
                    backgroundColor: "rgba(218, 165, 32, 0.2)",
                    color: "goldenrod",
                  }}/>,  
            }
            break;
            default:
                break;
    }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{amt}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right"><div className="percentage positive">
      <KeyboardArrowUpIcon/> {diff}%
        </div>
        {data.icon}
        </div>
    </div>
    
  )
}

export default Widget
