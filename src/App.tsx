import React, { ComponentProps } from "react";
import "./App.css";
import "animate.css/animate.css";
import data from "./data.json";

import MainImage from "./components/MainImage/MainImage";
import Card from "./components/Card/Card";
import EnhancedSwipeableViews from 'react-swipeable-views';
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <MainImage />
      <div className="card">
        {data.map((item: ComponentProps<typeof Card>, index: number) => {
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
      <EnhancedSwipeableViews enableMouseEvents>
      <div className="slide">あああああ</div>
      <div className="slide">いいいいい</div>
      <div className="slide">ううううう</div>
      </EnhancedSwipeableViews>
      <Footer />
    </div>
  );
};

export default App;
