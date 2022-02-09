import './learningmobile.css';
import learningSubs from '../../assets/data/learning.json';

function LearningMobile(props) {
  return (
    <div>
      <div className='learning-holder-mobile'>
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
