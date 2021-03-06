import React from 'react';
import { Link } from 'react-router-dom';

function MobileMenu() {
  function closeNav() {
    const menu = document.querySelector('.mobile-menu');
    menu.style.width = '0';
  }
  return (
    <div className='mobile-menu'>
      <nav id='mobile-nav'>
        <a href={null} className='closebtn' onClick={closeNav}>
          &times;
        </a>
        <Link to='/about' onClick={closeNav}>
          <button>About</button>
        </Link>
        <Link to='/' onClick={closeNav}>
          <button>Projects</button>
        </Link>
        <Link to='/learning' onClick={closeNav}>
          <button>Learning</button>
        </Link>
        <Link to='/contact' onClick={closeNav}>
          <button>Contact</button>
        </Link>
      </nav>
      {/* <footer>
        <div className='gh-link-holder'>
          <img />
          <a href='https://github.com/v-wang' target=' _blank'>
            <h4>v-wang</h4>
          </a>
        </div>
      </footer> */}
    </div>
  );
}

export default MobileMenu;
