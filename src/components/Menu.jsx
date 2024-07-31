import React from 'react';
import './Menu.css';
import IMG_3608 from '../images/IMG_3608.png';
import IMG_3609 from '../images/IMG_3609.png';
import IMG_3733 from '../images/IMG_3733.jpg';

const Menu = () => {
  const data = [
    {
      ttl: "逃走中との出会い",
      txt: "5歳の頃に放送されたジャンプ！〇〇中を見て釘付け！以降どんな用事があろうと欠かさずリアルタイム視聴",
      Path: IMG_3608
    },
    {
      ttl: "支え",
      txt: "幼少期からの難病で何もできなかった人生を支えてくれたのが逃走中の存在です。回復した今逃走成功を果たして一つの成功体験を掴みたい！",
      Path: IMG_3609
    },
    {
      ttl: "3000時間プレイ",
      txt: "『逃走中 史上最強のハンターたちからにげきれ』は発売から遊び続け、そのプレイ時間は12年間で3000時間を突破！！",
      Path: IMG_3733
    }
  ];

  return (
    <>
      {data.map((item, index) => (
        <div className="content" key={index}>
          <div className="inner-content">
            <img className="image" src={item.Path} alt={item.ttl} />
            <div className="desc">
              <h2 className="title">{item.ttl}</h2>
              <p className="text">{item.txt}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Menu;
