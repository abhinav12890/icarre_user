import React from "react";
import "./form.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { auth, db, storage } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Form = ({inputs,title}) => {
  const [file, setFile] = useState("");
   const [data, setData] = useState({});
   const { currentUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };
  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const res = await addDoc(collection(db, `users/form/${currentUser.displayName}`), {
        ...data,
        timeStamp: serverTimestamp(),
      });
      console.log(res);

      navigate(-1);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          
        </div>
        <div className="bottom">
          {/* <div className="left"></div> */}
          <div className="right">
            <form onSubmit={handleAdd}>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={handleInput}
                  />
                </div>
              ))}
              <button  type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
