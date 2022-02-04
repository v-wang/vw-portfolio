import './App.css';
import './AppMobile.css';
import { useState, useEffect } from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import profilePic from './assets/images/profile-pic.png';
import menuIcon from './assets/images/menu.png';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Learning from './components/Learning/Learning';
import Contact from './components/Contact/Contact';
import resumePDF from './assets/vw-resume.pdf';

import AboutMobile from './components/About/AboutMobile';
import ProjectsMobile from './components/Projects/ProjectsMobile';
import LearningMobile from './components/Learning/LearningMobile';
import ContactMobile from './components/Contact/ContactMobile';
import ghIcon from './assets/images/github.png';
import liIcon from './assets/images/linkedin.png';
import emailIcon from './assets/images/email.png';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const breakpoint = 625;

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  console.log(windowWidth);
  if (windowWidth > breakpoint) {
    return (
      <div className='bg-holder'>
        <div className='bg-inner-one'>
          <div className='bg-inner-two'>
            <div className='bg-main'>
              <div className='bg-main-content'>
                <nav id='desktop-nav'>
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
                <div className='intro-top'>
                  <div className='intro-text-area'>
                    <h2>Hi, I am Victor, Software Engineer</h2>
                    <p>
                      I'm an explorer and creator at heart - traveling the world
                      and building a digital universe. I'm always open to work
                      or to just chat. Come say hi!
                    </p>
                    <a href={resumePDF} download>
                      <button>
                        <h3>Download Resume</h3>
                      </button>
                    </a>
                  </div>
                  <div className='intro-profile-pic'>
                    <img src={profilePic} alt='victor profile pic' />
                  </div>
                </div>
                <Route exact path='/' component={Projects} />
                <Route exact path='/about' component={About} />
                <Route exact path='/learning' component={Learning} />
                <Route exact path='/contact' component={Contact} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className='bg-holder-mobile'>
        <div className='bg-inner-one-mobile'>
          <div className='bg-inner-two-mobile'>
            <img src={menuIcon} id='menu-icon-mobile' />
            <img src={profilePic} id='profile-pic-mobile' />
            <div id='social-links-mobile'>
              <a
                href='https://github.com/v-wang'
                target='_blank'
                className='soc-mobile'
              >
                <img src={ghIcon} />
              </a>
              <a
                href='https://www.linkedin.com/in/vicw/'
                target='_blank'
                className='soc-mobile'
              >
                <img src={liIcon} />
              </a>
              <a href='mailto: mailbox.vmw@gmail.com ' className='soc-mobile'>
                <img src={emailIcon} />
              </a>
            </div>
            <div className='mobile-menu'>
              <nav id='mobile-nav'>
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
            <div className='bg-main-mobile'>
              <Route exact path='/' component={ProjectsMobile} />
              <Route exact path='/about' component={AboutMobile} />
              <Route exact path='/learning' component={LearningMobile} />
              <Route exact path='/contact' component={ContactMobile} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
