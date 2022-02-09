import './contactmobile.css';
function ContactMobile(props) {
  return (
    <div className='contact-holder-mobile'>
      <h1>Contact</h1>
      <div className='contact-content-mobile'>
        <div className='contact-text-mobile'>
          <p>
            I’m currently located in Philadelphia, PA. I’m open to both
            relocation and remote work. If you have something else in mind, or
            just want to say hi, shoot me a message! I appreciate you taking the
            time to stop by.
          </p>
          <p>
            <em>
              As a small thanks, check out some of my favorite spots to eat in
              Philly!
            </em>
          </p>
        </div>
        <div className='contact-links-holder-mobile'>
          <div className='contact-link-mobile'>
            <img src={require('../../assets/images/email.png')} />
            <a href='mailto: mailbox.vmw@gmail.com'>mailbox.vmw@gmail.com</a>
          </div>
          <div className='contact-link-mobile'>
            <img src={require('../../assets/images/github.png')} />
            <a href='https://github.com/v-wang' target='_blank'>
              github.com/v-wang
            </a>
          </div>
          <div className='contact-link-mobile'>
            <img src={require('../../assets/images/linkedin.png')} />
            <a href='https://www.linkedin.com/in/vicw/' target='_blank'>
              linkedin.com/in/vicw/
            </a>
          </div>
        </div>
      </div>
      <iframe
        src='https://www.google.com/maps/d/u/1/embed?mid=1Y1uOVtF2Kb3FvgoN_UPy5CoT3uBkukxn&ehbc=2E312F'
        width='90%'
        height='280'
        id='map-mobile'
      ></iframe>
    </div>
  );
}

export default ContactMobile;
