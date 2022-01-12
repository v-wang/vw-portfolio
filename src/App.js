import './App.css';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import profilePic from './assets/images/profile-pic.png';
import About from './components/About';
import Projects from './components/Projects';
import Learning from './components/Learning';
import Contact from './components/Contact';

function App() {
  return (
    <div className='bg-holder'>
      <div className='bg-inner-one'>
        <div className='bg-inner-two'>
          <div className='bg-main'>
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
                <h2>Hi, I'm Victor, Software Developer.</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
                <button>
                  <h3>Download Resume</h3>
                </button>
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
  );
}

export default App;
