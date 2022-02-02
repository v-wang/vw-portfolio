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
            <img src={require('../../assets/images/email.png')} />
            <a href='mailto: mailbox.vmw@gmail.com'>mailbox.vmw@gmail.com</a>
          </div>
          <div className='contact-link'>
            <img src={require('../../assets/images/github.png')} />
            <a href='https://github.com/v-wang' target='_blank'>
              github.com/v-wang
            </a>
          </div>
          <div className='contact-link'>
            <img src={require('../../assets/images/linkedin.png')} />
            <a href='https://www.linkedin.com/in/vicw/' target='_blank'>
              linkedin.com/in/vicw/
            </a>
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
