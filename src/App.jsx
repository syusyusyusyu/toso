import React from "react";
import "./App.css";
import "animate.css/animate.css";
import data from "./data.json";
import Menu from "./components/Menu";
import ContactForm from "./components/ContactForm"; 
import InViewMonitor from "react-inview-monitor";

const App = () => {
  return (
    <div className="App">
       <section>
            <div className="main_image">
            <InViewMonitor classNameNotInView='hidden' classNameInView='animate__animated animate__fadeInRight slower'>
                <h1 className="title1">
                    <p style={{textAlign:'left'}}>
                        名前：吉田 柊（よしだ しゅう）<br />
                        年齢：22歳（専門学生）<br />
                        出身：奈良県
                    </p>
                </h1>
            </InViewMonitor>
            </div>
        </section>
      <div className="menu">
        {data.map((item, index) => {
          return (
            <Menu
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
    </div>
  );
};

export default App;
