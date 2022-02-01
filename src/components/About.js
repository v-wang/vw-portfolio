import React from 'react';
import pups from '../assets/images/vw-pups.jpeg';

function About(props) {
  return (
    <div className='about-holder'>
      <h2>About</h2>
      <div className='about-me'>
        <p>
          Hello, I'm Victor Wang. I build websites and applications and I'm
          always looking for something new to try out. I have a particular
          interest in data scraping and blockchain technology. I consider myself
          a fullstack developer, comfortable with working with front end
          frameworks as well as database management and APIs.
        </p>
        <p>
          When I'm not creating apps for the digital world, I'm out exploring
          and traveling the real world. I still have many places to check out.
          If you have any recommendations, visit my contact page and shoot me a
          message!
        </p>
      </div>
      <div className='img-gallery'>
        <img src={pups} />
      </div>
    </div>
  );
}

export default About;
