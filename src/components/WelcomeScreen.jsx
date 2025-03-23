import { useState } from "react";
import "./WelcomeScreen.css";
import hydroponicsImage from "D:/vrsp11603/Technical Defense Application/Verde Prototype Vite/verde-login/src/assets/images/hydroponics2.jpg";
import logo from "../assets/images/Verde Full Logo.png"; // Import your logo

const WelcomeScreen = () => {
    const [view, setView] = useState("welcome"); // "welcome", "login", or "signup"

  return (
    <>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="app-logo" />        
      </div>
      <nav className="signup-container">
      
      <div className="signup-left">
        <header className="header">
            <h1 className="signup-heading">SMART FARMING.<br />SMARTER FUTURE.</h1>
        </header>
      </div>

      <div className="signup-right">
        {
            view === "welcome" && (
                <>
                  <h2>Getting Started</h2>
                  <button className="signup-button" onClick={() => setView("login")}>Log In</button>
                  <button className="signup-button" onClick={() => setView("signup")}>Sign Up</button>
                </>
              )
        }
        {
            view === "login" && (
                <>
                  <h2>Sign In</h2>
                  <input type="email" placeholder="Email" />
                  <input type="password" placeholder="Password" />
                  <button className="signup-button">Sign In</button>
                  <p>Haven't registered yet? <span onClick={() => setView("signup")} className="switch-link"> Sign Up</span></p>
                  <button className="back-btn" onClick={() => setView("welcome")}>Back</button>
                </>
              )
        }
        {
            view === "signup" && (
                <>
                  <h2>Sign Up</h2>
                  <input type="email" placeholder="Email" />
                  <input type="text" placeholder="Username" />
                  <input type="password" placeholder="Password" />
                  <button className="signup-button">Sign Up</button>
                  <p>Already have an account? <span onClick={() => setView("signup")} className="switch-link"> Sign In</span></p>
                  <button className="back-btn" onClick={() => setView("welcome")}>Back</button>
                </>
              )
        }
      </div>
    </nav>
    </>
  );
};

export default WelcomeScreen;