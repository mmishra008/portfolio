import React from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import linkedin_icon from '../../assets/linkedin_icon.svg';
import github_icon from '../../assets/github_icon.svg';
const Contact = () => {
  const [result, setResult] = React.useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.target);

    formData.append('access_key', '94712503-882c-48b2-9ba9-9b6c1d9ec67d');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Form Submitted Successfully');
      event.target.reset();
      alert('Email send successfully');
    } else {
      console.log('Error', data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            Currently I'm ready to move for new good job opportunity, where i
            use my full of knowledge and strength for growth of your prestigious
            organization. So feel free to send me a message about anything that
            you want me to work on. You can contact anytime.
          </p>
          <div className="cotact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="email" />
              <p>mmishra433@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="mobile" />
              <p>+917518632140</p>
            </div>
            <div className="contact-detail">
              <img src={linkedin_icon} alt="mobile" className="linkedin_icon" />
              <a href={`https://www.linkedin.com/in/mmishra5`}>LinkedIn</a>
            </div>
            <div className="contact-detail">
              <img src={github_icon} alt="mobile" className="github_icon" />
              <a href={`https://github.com/mmishra008`}>GitHub</a>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="location" />
              <p>Noida UP</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter Your Name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter Your Email" name="email" />
          <label htmlFor="">Write Your Message Here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter Your Message"
          ></textarea>
          <button className="contact-submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
