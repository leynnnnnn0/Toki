import { useState } from "react";
import Button from "../../components/button/Button";
import LandingFormInput from "../../components/landingFormInput/LandingFormInput";
import "./Login.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { userStore } from "../../store/userStore";

const Login = () => {
  const getUser = userStore(state => state.getUser);
  const navigate = useNavigate();
  const [information, setInformation] = useState({
    username: "",
    password: "",
  });
  axios.defaults.withCredentials = true;
  const fetchData = async () => {
    try {
      const isAccess = getUser(information.username, information.password);
      if(isAccess) {
        navigate('/feed');
        return;
      }
    }catch (err) {
      console.log(err.message);
    }
      
  }
    

  const handleChange = (e) => {
    setInformation({
      ...information,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();

  }
  return (
    <div className="login-page FORM-BOX HW100">
      <div className="login-box BORDER20 AUTHORIZATION_BOX">
        <p className="P1">Welcome to toki</p>
        <h1 className="sign-in H1">Sign in</h1>
        {/* username or email text field */}
        <LandingFormInput
          placeholder="Username or email address"
          title="Enter your username or email address"
          className="login-username"
          inputName="username"
          inputValue={information.username}
          handleChange={handleChange}
          
        />
        {/* // password text field */}
        <LandingFormInput
          placeholder="Password"
          title="Enter your password"
          idetification="login-username"
          inputName="password"
          inputValue={information.password}
          handleChange={handleChange}
        />
        <p className="forget-password SPAN1 TEXT-END">Forgot Password</p>
        <Button handleSubmit={handleSubmit} title="Sign in" identification="sign-in-button" />
      </div>
    </div>
  );
};

export default Login;
