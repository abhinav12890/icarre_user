import "./register.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import {useUserAuth} from "../../context/UserAuthContext"
import Add from "../../img/addAvatar.png";
import { doc, setDoc } from "firebase/firestore";
import { auth, db, storage } from "../../firebase";
import { createUserWithEmailAndPassword , updateProfile  } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `profile/${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/login");
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };
  return (
    <div className="register">
      <div className="box">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <h2>Sign up</h2>
          <div className="inputBox">
            <input type="text" required="required"/>
            <span>Name</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input type="email" required="required"/>
            <span>Email</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input type="password" required="required" />
            <span>Password</span>
            <i></i>
          </div>
          <div className="avatar">
          <input required style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label>
          </div>

          <div className="links">
            <div className="ex">Already have an account ?</div>
            <Link to="/" style={{ textDecoration: "none" }}>
              <div className="ex">Login</div>
            </Link>
          </div>
          <input disabled={loading} type="submit" value="Signup" />
          {loading && <span className="er">Uploading and compressing the image please wait...</span> }

		      {err && <span className="er">Email or password already exists!</span>}
        </form>
      </div>
    </div>
  );
};

export default Register;
