import EmailHeading from "./EmailHeading";
import { useNavigate } from 'react-router-dom';
import React from 'react';

class Login extends React.Component {
  render() {

    const handleSubmit = e => {
      const emailEntered = document.getElementById("email").value;
      const passwordEntered = document.getElementById("password").value;
      if (emailEntered.includes("@")
      && emailEntered.includes(".")) {
        e.preventDefault();
        this.props.navigate("/dashboard");
      } else {
        alert("Invalid email address!");
      }
    }
    return (
      <div>
        <EmailHeading/>
        <form id="login-form"  onSubmit={handleSubmit}>
          <input type="text" id="email" placeholder="Email" required/> <br></br>
          <input type="password" id="password" placeholder="Password" required/>
          <br></br>
          <button type="submit" id="submit-button">Login</button>
        </form>
      </div>
    );
  }
};

function WithNav(props) {
  let navigate = useNavigate();
  return <Login navigate={navigate}/>
}

export default WithNav;
