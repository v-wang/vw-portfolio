import React from 'react';
import { Link } from 'react-router-dom';

function MobileMenu() {
  function closeNav(ev) {
    ev.target.parentElement.parentElement.style.width = '0';
  }
  return (
    <div className='mobile-menu'>
      <nav id='mobile-nav'>
        <a href={null} className='closebtn' onClick={(ev) => closeNav(ev)}>
          &times;
        </a>
        <Link to='/about'>
          <button>About</button>
        </Link>
        <Link to='/'>
          <button>Projects</button>
        </Link>
        <Link to='/learning'>
          <button>Learning</button>
        </Link>
        <Link to='/contact'>
          <button>Contact</button>
        </Link>
      </nav>
    </div>
  );
}

export default MobileMenu;
