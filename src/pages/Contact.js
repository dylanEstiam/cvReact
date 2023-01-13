import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Navigation from '../components/Navigation';

const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactBox">
          <h1>Contactez moi</h1>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Estiam ...</span>
            </li>
            <li>
              <i className="fas fa-mobile-alt"></i>
              <CopyToClipboard text="00 00 00 00 00">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert('Numéro copié');
                  }}
                >
                  00 00 00 00 00
                </span>
              </CopyToClipboard>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <CopyToClipboard text="abc.abc@abc.abc">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert('Adresse copié');
                  }}
                >
                  abc.abc@abc.abc
                </span>
              </CopyToClipboard>
            </li>
          </ul>
        </div>

        <div className="socialNetwork">
          <ul>
            <a
              href="http://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Linkedin</h4>
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="http://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Github</h4>
              <i className="fab fa-github"></i>
            </a>
            <a
              href="http://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Twitter</h4>
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="http://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Codepen</h4>
              <i className="fab fa-codepen"></i>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
