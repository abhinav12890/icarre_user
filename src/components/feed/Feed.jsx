import "./feed.scss";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
} from "firebase/firestore";
import { db } from "../../firebase";
import React from "react";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const Feed = () => {
  const [data, setData] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, `usersReport/report/${currentUser.displayName}`));
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          list.push({ id: doc.id, ...doc.data() });
          setData(list);
          console.log(list);
          // console.log(doc.id, " => ", doc.data());
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        {data.map((list) => {
          return (
            <div className="report">
              <ul>
                <li>
                  <img width="675" height="500" src={list.img} alt= '' />
                  <p>{list.desc}</p>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Feed;
