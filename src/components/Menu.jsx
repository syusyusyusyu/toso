import React from 'react';
import './Menu.css';
import IMG_3608 from '../images/IMG_3608.png';
import IMG_3609 from '../images/IMG_3609.png';
import IMG_3733 from '../images/IMG_3733.jpg';

const Menu = () => {
  const data = [
    {
      title: "逃走中との出会い",
      text: "5歳の頃に放送されたジャンプ！〇〇中を見て釘付け！以降どんな用事があろうと欠かさずリアルタイム視聴",
      imagePath: IMG_3608
    },
    {
      title: "支え",
      text: "幼少期からの難病で何もできなかった人生を支えてくれたのが逃走中の存在です。回復した今逃走成功を果たして一つの成功体験を掴みたい！",
      imagePath: IMG_3609
    },
    {
      title: "3000時間プレイ",
      text: "『逃走中 史上最強のハンターたちからにげきれ』は発売から遊び続け、そのプレイ時間は12年間で3000時間を突破！！",
      imagePath: IMG_3733
    }
  ];

  return (
    <>
      {data.map((item, index) => (
        <div className="content" key={index}>
          <div className="inner-content">
            <img className="image" src={item.imagePath} alt={item.title} />
            <div className="description">
              <h2 className="title">{item.title}</h2>
              <p className="text">{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Menu;
