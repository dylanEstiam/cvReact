import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function YearCopyright() {
  return (
    <p>
      <a href="https://lmiot.ovh" target="_blank" rel="noopener noreferrer">
        <i className="far fa-copyright"></i>
        Dylan REGNAULT - {new Date().getFullYear()} <br/>
        dylan-regnault.com
      </a>
    </p>
  );
}

const Navigation = () => {
  return (
    <>
      <div className="sidebar">
        <div className="id">
          <div className="idContent">
            <img src="./media/profile-cv.jpg" alt="Profile pics" />
            <h3>Dylan REGNAULT</h3>
          </div>
        </div>

        <div className="navigation">
          <ul>
            <li>
              <Link exact to="/" activeClassName="navActive">
                <i className="fas fa-home"></i>
                <span> Acceuil </span>
              </Link>
            </li>
            <li>
              <Link exact to="/competences" activeClassName="navActive">
                <i className="fas fa-mountain"></i>
                <span>Compétences</span>
              </Link>
            </li>

            <li>
              <Link exact to="/cursus" activeClassName="navActive">
                <i className="fas fa-book"></i>
                <span>Cursus</span>
              </Link>
            </li>

            <li>
              <Link exact to="/portfolio" activeClassName="navActive">
                <i className="fas fas fa-images"></i>
                <span>Portfolio</span>
              </Link>
            </li>

            <li>
              <NavLink exact to="/contact" activeClassName="navActive">
                <i className="fas fa-address-book"></i>
                <span>Contact</span>
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="socialNetwork">
          <ul>
            <li>
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-youtube"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-codepen"></i>
              </a>
            </li>
          </ul>
        <div className="copyright">
          <a>
            <YearCopyright/>
          </a>
        </div>
        </div>

      </div>
    </>
  );
};

export default Navigation;
