import React from 'react';
import learningSubs from '../../assets/data/learning.json';
import './learning.css';

function Learning(props) {
  return (
    <div className='learning-holder'>
      <h2>Learning</h2>
      <div className='learning-sub-holder'>
        {learningSubs.map((sub) => {
          return (
            <div className='learning-sub'>
              <img src={sub.img_url} alt={sub.title} />
              <h3>{sub.title}</h3>
              <p>{sub.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Learning;
