import React from 'react';
import '../styles/Menu.css';

const MenuItem = ({ item }) => (
  <div className="cnt">
    <div className="inner">
      <img className="img" src={item.imagePath} alt={item.title} />
      <div className="desc">
        <h2 className="ttl">{item.title}</h2>
        <p className="txt">{item.text}</p>
      </div>
    </div>
  </div>
);

export default MenuItem;
