import "./Signin.css";
import LandingFormInput from "../../components/landingFormInput/LandingFormInput";
import Button from "../../components/button/Button";
import { useState } from "react";
import axios from 'axios'
const Signin = () => {
  const [information, setInformation] = useState({
    email: "",
    username: "",
    password: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:8000/api/users", {username: information.username, email: information.email, password: information.password}).catch(err => console.log(err));
    window.alert(res);
  }

  const handleChange = (e) => {
    setInformation({...information, [e.target.name]: e.target.value });
    console.log(information)
  };
  return (
    <div className="FORM-BOX HW100">
      <div className="sign-up-box BORDER20 AUTHORIZATION_BOX">
        <p className="P1">Welcome to toki</p>
        <h1 className="sign-in H1">Sign in</h1>
        <LandingFormInput
          placeholder="Email"
          title="Enter your email"
          idetification="sign-up-email"
          inputName="email"
          inputValue={information.email}
          handleChange={handleChange}
        />
        <LandingFormInput
          placeholder="Username"
          title="Enter your username"
          idetification="sign-up-username"
          inputName="username"
          inputValue={information.username}
          handleChange={handleChange}

          
        />
        <LandingFormInput
          placeholder="Password"
          title="Enter your password"
          idetification="sign-up-password"
          inputName="password"
          inputValue={information.password}
          handleChange={handleChange}
        />
        <Button title="Sign Up" identification="sign-up-button" handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default Signin;
