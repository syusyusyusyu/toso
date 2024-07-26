import React from 'react';
import '../styles/Header.css';

const Header = () => (
    <header className="hdr">
        <div className="main-img">
            <div className="title-container" style={{ textAlign: 'left' }}>
                <p>
                    <strong>名前：吉田 柊（よしだ しゅう）</strong><br />
                    <strong>年齢：22歳（専門学生）</strong><br />
                    <strong>出身：奈良県</strong>
                </p>
            </div>
        </div>
    </header>
);

export default Header;
