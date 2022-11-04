import "./login.scss"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import{Link} from "react-router-dom";

const Login = () => {
	const [err, setErr] = useState(false);
	const navigate = useNavigate();
  
	const handleSubmit = async (e) => {
	  e.preventDefault();
	  const email = e.target[0].value;
	  const password = e.target[1].value;
  
	  try {
		await signInWithEmailAndPassword(auth, email, password);
		navigate("/")
	  } catch (err) {
		setErr(true);
	  }
	  };
  return (
    <div className='login'>
     	<div className="box">
		<form autoComplete="off" onSubmit={ handleSubmit}>
			<h2>Login</h2>
			<div className="inputBox">
				<input type="email" required="required"/>
				<span>Email</span>
				<i></i>
			</div>
			<div className="inputBox">
				<input type="password" required="required"/>
				<span>Password</span>
				<i></i>
			</div>
			<div className="links">
				<div className="ex">Forgot Password ?</div>
				<Link to="/register" style={{textDecoration :"none"}}><div className="ex">Signup</div></Link>
			</div>
			<input type="submit" value="Login"/>
			{err && <span className="er">Wrong email or password!</span>}
		</form>
	</div>
    </div>
  )
}

export default Login
