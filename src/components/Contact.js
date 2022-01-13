import React from 'react';

function Contact(props) {
  return (
    <div className='contact-holder'>
      <h2>Contact</h2>
      <div className='contact-content'>
        <div className='contact-text'>
          <p>
            I’m currently located in Philadelphia, PA. I’m open to both
            relocation and remote work. If you have something else in mind, or
            just want to say hi, shoot me a message! I appreciate you taking the
            time to stop by.&nbsp;
            <em>
              As a small thanks, check out some of my favorite spots to eat in
              Philly!
            </em>
          </p>
        </div>
        <div className='contact-links-holder'>
          <div className='contact-link'>
            <img src={require('../assets/images/email.png')} />
            <h4>mailbox.vmw@gmail.com</h4>
          </div>
          <div className='contact-link'>
            <img src={require('../assets/images/github.png')} />
            <h4>https://github.com/v-wang</h4>
          </div>
          <div className='contact-link'>
            <img src={require('../assets/images/linkedin.png')} />
            <h4>https://www.linkedin.com/in/vicw/</h4>
          </div>
        </div>
      </div>
      <iframe
        src='https://www.google.com/maps/d/u/1/embed?mid=1Y1uOVtF2Kb3FvgoN_UPy5CoT3uBkukxn&ehbc=2E312F'
        width='100%'
        height='480'
        id='map'
      ></iframe>
    </div>
  );
}

export default Contact;
