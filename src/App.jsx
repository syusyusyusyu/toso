import React from "react";
import "./App.css";
import "animate.css/animate.css";
import data from "./data.json";

import MainImage from "./components/MainImage";
import Card from "./components/Card";
import ContactForm from "./components/ContactForm"; 
import Footer from "./components/Footer";
import InViewMonitor from "react-inview-monitor";

const App = () => {
  return (
    <div className="App">
      <MainImage />
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
      <Footer />
    </div>
  );
};

export default App;
