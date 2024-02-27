import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './Header.css';

function Header() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isTop, setIsTop] = useState(true);
  const [isAutoScroll, setIsAutoScroll] = useState(false);

  const handleClick = () => {
    setIsAutoScroll(true);
    setTimeout(() => {
      setIsAutoScroll(false);
    }, 1000);
  }

  useEffect(() => {
    const header = document.querySelector('header');

    const handleScroll = () => {
      let st = window.pageYOffset || document.documentElement.scrollTop;
      setIsTop(st <= 0 ? true : false);
      if (st > lastScrollTop) {
        if (!isTop && !isAutoScroll) {
          header.classList.add('scrolling');
        }
      } else {
        header.classList.remove('scrolling');
      }
      setLastScrollTop(st <= 0 ? 0 : st);
    };

    const handleMouseMove = (e) => {
      if (e.clientY < 50) {
        header.classList.remove('scrolling');
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [lastScrollTop, isTop, isAutoScroll]);

  return (
    <header>
      <nav>
        <Link onClick={handleClick} activeClass="active" to="landing" spy={true} smooth={true} offset={-70}>Home</Link>
        <Link onClick={handleClick} activeClass="active" to="projects" spy={true} smooth={true} offset={-70}>Projects</Link>
        <Link onClick={handleClick} activeClass="active" to="contact" spy={true} smooth={true} offset={-70}>Contact</Link>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://www.github.com" target="_blank" rel="noreferrer">Github</a>
      </nav>
    </header>
  );
}

export default Header;
