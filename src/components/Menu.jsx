import React from 'react';
import MenuItem from './MenuItem';
import '../styles/Menu.css';

const menuData = [
  {
    title: "逃走中との出会い",
    text: "5歳の頃に放送されたジャンプ！〇〇中を見て釘付け！以降どんな用事があろうと欠かさずリアルタイム視聴",
    imagePath: "/images/IMG_3608.png"
  },
  {
    title: "支え",
    text: "幼少期からの難病で何もできなかった人生を支えてくれたのが逃走中の存在です。回復した今逃走成功を果たして一つの成功体験を掴みたい！",
    imagePath: "/images/IMG_3609.png"
  },
  {
    title: "3000時間プレイ",
    text: "『逃走中 史上最強のハンターたちからにげきれ』は発売から遊び続け、そのプレイ時間は12年間で3000時間を突破！！",
    imagePath: "/images/IMG_3733.jpg"
  }
];

const Menu = () => (
  <section className="mn">
    {menuData.map((item, index) => (
      <MenuItem key={index} item={item} />
    ))}
  </section>
);

export default Menu;
