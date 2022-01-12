import './App.css';
import profilePic from './assets/profile-pic.png';
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
              <a href=''>About</a>
              <a href=''>Projects</a>
              <a href=''>Learning</a>
              <a href=''>Contact</a>
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
            <About></About>
            <Projects></Projects>
            <Learning></Learning>
            <Contact></Contact>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
