import './App.css';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import profilePic from './assets/images/profile-pic.png';
import About from './components/About';
import Projects from './components/Projects';
import Learning from './components/Learning';
import Contact from './components/Contact';
import resumePDF from './assets/vw-resume.pdf';

function App() {
  return (
    <div className='bg-holder'>
      <div className='bg-inner-one'>
        <div className='bg-inner-two'>
          <div className='bg-main'>
            <div className='bg-main-content'>
              <nav>
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
                    and building a digital universe. I'm always open to work or
                    to just chat. Come say hi!
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
}

export default App;
