import React from "react";
import "./App.css";
import "animate.css/animate.css";
import Menu from "./components/Menu";
import ContactForm from "./components/ContactForm"; 
import InViewMonitor from "react-inview-monitor";

const App = () => {
  const data = [
    {
      title: "逃走中との出会い",
      description: "5歳の頃に放送されたジャンプ！〇〇中を見て釘付け！以降どんな用事があろうと欠かさずリアルタイム視聴",
      imagePath: "./images/IMG_3608.png"
    },
    {
      title: "支え",
      description: "幼少期からの難病で何もできなかった人生を支えてくれたのが逃走中の存在です。回復した今逃走成功を果たして一つの成功体験を掴みたい！",
      imagePath: "./images/IMG_3609.png"
    },
    {
      title: "3000時間プレイ",
      description: "『逃走中 史上最強のハンターたちからにげきれ』は発売から遊び続け、そのプレイ時間は12年間で3000時間を突破！！",
      imagePath: "./images/IMG_3733.jpg"
    }
  ];

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
            <Menu title={item.title} description={item.description} imagePath={item.imagePath} key={index}/>
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
