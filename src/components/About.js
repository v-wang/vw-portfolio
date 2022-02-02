import React from 'react';
import pups from '../assets/images/vw-pups.jpeg';
import techLanguages from '../assets/data/languages.json';

function About(props) {
  const languages = techLanguages[0];
  const frameworks_libraries = techLanguages[1];
  const databases_tools = techLanguages[2];
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
      </div>
      <div className='language-logos'>
        <h2>Languages</h2>
        {languages.tech_languages.map((language) => {
          return <img src={require(`../assets/images/${language.logo}`)} />;
        })}
      </div>
      <div className='framework-logos'>
        <h2>Frameworks/Libraries</h2>
        {frameworks_libraries.frameworks_libraries.map((framework) => {
          return <img src={require(`../assets/images/${framework.logo}`)} />;
        })}
      </div>
      <div className='db-logos'>
        <h2>Databases & Tools</h2>
        {databases_tools.databases_tools.map((db) => {
          return <img src={require(`../assets/images/${db.logo}`)} />;
        })}
      </div>
      <div className='about-me'>
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
