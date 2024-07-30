import React, { useEffect } from 'react';
import Menu from './components/Menu';
import ContactForm from './components/ContactForm';
import './App.css';

const App = () => {
  useEffect(() => {
    const handleScroll = () => {
      const descriptions = document.querySelectorAll('.description');
      const images = document.querySelectorAll('.image');
      const titleWrapper = document.querySelector('.title-wrapper');
      const formElements = document.querySelectorAll('.form-wrapper .float-in-element');

      descriptions.forEach(desc => {
        if (isElementInViewport(desc) && !desc.classList.contains('animate-right')) {
          desc.classList.add('animate-right');
        }
      });

      images.forEach(img => {
        if (isElementInViewport(img) && !img.classList.contains('animate-left')) {
          img.classList.add('animate-left');
        }
      });

      if (titleWrapper && isElementInViewport(titleWrapper) && !titleWrapper.classList.contains('animate-right')) {
        titleWrapper.classList.add('animate-right');
      }

      formElements.forEach(el => {
        if (isElementInViewport(el) && !el.classList.contains('animate-left')) {
          el.classList.add('animate-left');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  return (
    <div className="application" id="application">
      <header className="header">
        <div className="main-image">
          <div className="title-wrapper" style={{ textAlign: 'left' }}>
            <p style={{ color: 'white' }}>
              <strong>名前：吉田 柊（よしだ しゅう）</strong><br />
              <strong>年齢：22歳（専門学生）</strong><br />
              <strong>出身：奈良県</strong>
            </p>
          </div>
        </div>
      </header>
      <section className="menu" id="menu">
        <Menu />
      </section>
      <section className="contact-form">
        <ContactForm />
      </section>
    </div>
  );
};

export default App;
