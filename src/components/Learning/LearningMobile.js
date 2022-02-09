import './learningmobile.css';
import learningSubs from '../../assets/data/learning.json';
import { animateScroll as scroll } from 'react-scroll';
import upArrow from '../../assets/images/up-arrow.png';

function LearningMobile(props) {
  function goUp() {
    scroll.scrollToTop();
  }
  return (
    <div>
      <div className='learning-holder-mobile'>
        <button onClick={goUp} className='up-arrow-btn'>
          <img src={upArrow} className='up-arrow' />
        </button>
        <h1>Learning</h1>
        <div className='learning-sub-holder-mobile'>
          {learningSubs.map((sub) => {
            return (
              <div className='learning-sub-mobile'>
                <img src={sub.img_url} alt={sub.title} />
                <h3>{sub.title}</h3>
                <p>{sub.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default LearningMobile;
