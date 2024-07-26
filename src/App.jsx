import React, { useEffect } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import ContactForm from './components/ContactForm';
import './styles/App.css';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const desc = document.querySelectorAll('.desc');
      const img = document.querySelectorAll('.img');
      const tContainer = document.querySelector('.title-container');
      const formElements = document.querySelectorAll('.form-container .float-in-el');

      desc.forEach(d => {
        if (isElementInViewport(d) && !d.classList.contains('animate-right')) {
          d.classList.add('animate-right');
        }
      });

      img.forEach(i => {
        if (isElementInViewport(i) && !i.classList.contains('animate-left')) {
          i.classList.add('animate-left');
        }
      });

      if (tContainer && isElementInViewport(tContainer) && !tContainer.classList.contains('animate-right')) {
        tContainer.classList.add('animate-right');
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

  const isElementInViewport = el => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  return (
    <div className="app">
      <Header />
      <Menu />
      <ContactForm />
    </div>
  );
}

export default App;
