import "./data.scss"
import MoreVertIcon from "@mui/icons-material/MoreVert";


const Data = () => {
  return (
    <div className="Data">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src=""
              alt=""
            />
            <span className="postUsername">
                username
            </span>
            <span className="postDate">date</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">desc</span>
          <img className="postImg" src="" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Data
