import React from "react";
import "./App.css";
import "animate.css/animate.css";
import data from "./data.json";
import Card from "./components/Card";
import ContactForm from "./components/ContactForm"; 
import InViewMonitor from "react-inview-monitor";
import { FaTwitter } from "react-icons/fa";

const App = () => {
  return (
    <div className="App">
       <section>
            <div className="main_image">
            <InViewMonitor classNameNotInView='hidden' classNameInView='animate__animated animate__fadeInRight slower'>
                <h1 className="title">
                    <p style={{textAlign:'left'}}>
                        名前：吉田 柊（よしだ しゅう）<br />
                        年齢：22歳（専門学生）<br />
                        出身：奈良県
                    </p>
                </h1>
            </InViewMonitor>
            </div>
        </section>
      <div className="card">
        {data.map((item, index) => {
          return (
            <Card
              title={item.title}
              description={item.description}
              imagePath={item.imagePath}
              key={index}
            />
          );
        })}
      </div>
      <div className="formContainer">
        <InViewMonitor classNameNotInView='hidden' classNameInView='animate__animated animate__fadeInLeft slower'>
          <ContactForm/> 
        </InViewMonitor>
      </div>
      <footer className="footer">
            <small>
                <div>
                    <a href="https://twitter.com/hiiraagii" target="_blank" rel="noreferrer">
                        <FaTwitter className="icon" />
                    </a>
                </div>
            </small>
        </footer>
    </div>
  );
};

export default App;
