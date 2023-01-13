import React, { Component } from 'react';
import Progressbar from './Progressbar';

class Languages extends Component {
  state = {
    languages: [
      {
        id: 1,
        value: 'HTML/CSS',
        xp: 1.8,
      },
      {
        id: 2,
        value: 'javascript/typescript',
        xp: 1.8,
      },
      {
        id: 3,
        value: 'C#',
        xp: 1.8,
      },
      {
        id: 4,
        value: 'C++',
        xp: 1.8,
      },
    ],

    frameworks: [
      {
        id: 1,
        value: 'Angular',
        xp: 1.8,
      },
      {
        id: 2,
        value: 'React',
        xp: 1.8,
      },
      {
        id: 3,
        value: 'Express',
        xp: 1.8,
      },
      {
        id: 4,
        value: 'Nest',
        xp: 1.8,
      },
    ],
  };
  render() {
    let { languages, frameworks } = this.state;
    return (
      <div className='languagesFrameworks'>
        <Progressbar
          languages={ languages }
          className="languagesDisplay"
          title="Languages" />
        <Progressbar
          languages={ frameworks }
          className="frameworksDisplay"
          title="Frameworks & Bibliothèques" />
      </div>
    );
  }
}

export default Languages;
