import React from 'react';
import './aboutmobile.css';
import techLanguages from '../../assets/data/languages.json';
import pups from '../../assets/images/vw-pups.jpeg';

function AboutMobile(props) {
  const languages = techLanguages[0];
  const frameworks_libraries = techLanguages[1];
  const databases_tools = techLanguages[2];

  return (
    <div className='about-container'>
      <div className='about-me-mobile'>
        <h1>About</h1>
        <p>
          Hello, I'm Victor Wang. I build websites and applications and I'm
          always looking for something new to try out. I have a particular
          interest in data scraping and blockchain technology. I consider myself
          a fullstack developer, comfortable with working with front end
          frameworks as well as database management and APIs.
        </p>
      </div>
      <div className='about-languages-mobile'>
        <h2>Languages</h2>
        <div className='language-logos-mobile'>
          {languages.tech_languages.map((language) => {
            return (
              <img src={require(`../../assets/images/${language.logo}`)} />
            );
          })}
        </div>
        <h2>Frameworks/Libraries</h2>
        <div className='framework-logos-mobile'>
          {frameworks_libraries.frameworks_libraries.map((framework) => {
            return (
              <img src={require(`../../assets/images/${framework.logo}`)} />
            );
          })}
        </div>
        <h2>Databases/Tools</h2>
        <div className='db-logos-mobile'>
          {databases_tools.databases_tools.map((db) => {
            return <img src={require(`../../assets/images/${db.logo}`)} />;
          })}
        </div>
      </div>
      <div className='about-me-mobile'>
        <p>
          When I'm not creating apps for the digital world, I'm out exploring
          and traveling the real world. I still have many places to check out.
          If you have any recommendations, visit my contact page and shoot me a
          message!
        </p>
      </div>
      <div className='about-pics-mobile'>
        <img src={pups} />
      </div>
    </div>
  );
}

export default AboutMobile;
