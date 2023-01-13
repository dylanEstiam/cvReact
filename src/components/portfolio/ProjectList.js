import React, { Component } from 'react';
import { portfolioData } from '../../data/portfolioData';
import Project from './Project';

export default class ProjectList extends Component {
  // états, données
  state = {
    projects: portfolioData,
    radios: [
      {
        id: 1,
        value: 'javascript',
      },
      {
        id: 1,
        value: 'css',
      },
      {
        id: 1,
        value: 'react',
      },
      {
        id: 1,
        value: 'php',
      },
    ],

    selectedRadio: 'javascript',
  };

  // comportements
  handleRadio = (e) => {
    let radio = e.target.value;
    this.setState({ selectedRadio: radio });
  };

  // affichage

  render() {
    let { projects, radios, selectedRadio } = this.state;
    return (
      <div className="portfolioContent">
        <ul className="radioDisplay">
          {radios.map((radio, index) => {
            return (
              <li key={index}>
                <input
                  name="radio"
                  type="radio"
                  checked={radio.value === selectedRadio}
                  value={radio.value}
                  id={index}
                  onChange={this.handleRadio}
                />
                <label htmlFor={radio.value}>{radio.value}</label>
              </li>
            );
          })}
        </ul>

        <div className="projects">
            {/* Something to do */
                projects
                    .filter(item => item.languages.includes(selectedRadio))
                    .map((item, index) => {
                        return (
                            <Project
                                key={index}
                                item={item}
                            />
                        )
                    })
            }
        </div>
      </div>
    );
  }
}
