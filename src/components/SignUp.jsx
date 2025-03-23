import { useState } from "react";

const SignUp = ({ setScreen }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="form-container">
      <h2>Sign Up</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      
      <button className="form-button">Sign Up</button>

      <p>Already have an account? <span onClick={() => setScreen("login")} className="switch-link">Sign In</span></p>
      
      <button className="back-btn" onClick={() => setScreen("welcome")}>Back</button>
    </div>
  );
};

export default SignUp;
