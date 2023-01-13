import React from 'react';

const Progressbar = (props) => {
    return (
      <div className={props.className}>
        <h1>{props.title}</h1>
        <div className='years'>
          <span>Année(s) d'expérience</span>
          <span>1 an</span>
          <span>2 ans</span>
        </div>
        <div>
          {
            props.languages.map((language, index) => {
              let xpYears = 2;
              let progressbar = (language.xp / xpYears * 100 - 5) + "%";

              return (
                <div key={index} className="languagesList">
                  <li>{language.value}</li>
                  <div className='progressBar' style={{width: progressbar}}>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    );
};

export default Progressbar;