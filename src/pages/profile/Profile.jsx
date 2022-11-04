import "./profile.scss";
import { useState } from "react";
import { useEffect } from "react";
// import { doc, getDoc } from "firebase/firestore";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
// import Chart from "../../components/chart/Chart";
import Feed from "../../components/feed/Feed";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
// import { auth } from "../../firebase";
import { db } from "../../firebase";
import { useContext } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
// import Datatable from "../../components/datatable/Datatable";

const Profile = () => {
  const [info, setInfo] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const getInfo = async () => {
      const data = await getDocs(
        collection(db, `users/form/${currentUser.displayName}`)
      );
      setInfo(data.docs.map((doc) => ({ ...doc.data() })));
    };
    getInfo();
  }, []);
  // console.log(user);
  return (
    <div className="profile">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            {/* <div className="editButton">Edit</div> */}
            <h1 className="title">Information</h1>
            <div className="item">
              <img src={currentUser.photoURL} alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">{currentUser.displayName}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{currentUser.email}</span>
                </div>
                <div className="new">
                  <Link to="/new" style={{ textDecoration: "none" }}>
                    <button>Upload Report Image</button>
                  </Link>
                </div>
                <div className="new">
                  <Link to="/form" style={{ textDecoration: "none" }}>
                    <button>Upload Form</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="user1">
              {info.map((info) => {
                return (
                  <div>
                    {""}
                    <h1> Country : {info.Country}</h1>
                    <h1> Age : {info.AGE}</h1>
                    <h1> DOB : {info.DOB}</h1>
                    <h1> Gender : {info.Gender}</h1>
                    <h1> Phone : {info.phone}</h1>
                  </div>
                );
              })}
            </div>
          </div>
          {/* <div className="right">
            {/* <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" /> */}

          {/* </div> */}
        </div>
        <div className="bottom">
          {/* <h1 className="title">Recent reports</h1>
          <Datatable head={"Add New Reports"}/> */}
          <Feed />
        </div>
      </div>
    </div>
  );
};

export default Profile;
