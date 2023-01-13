import React, { Component } from 'react';

export default class Project extends Component {
  // état

  state = {
    showInfo: false,
  };

  // comportement
  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };

  // affichage

  render() {
    let { name, languagesIcons, source, info, picture } = this.props.item;
    return (
      <div className="project">
        <div className="icons">
          {languagesIcons.map((icon) => {
            return <i className={icon} key={icon}></i>;
          })}
        </div>
        <h3>{name}</h3>
        <img src={picture} alt="Img du projet" onClick={this.handleInfo} />
        <span className="infos" onClick={this.handleInfo}>
          <i className="fas fa-plus-circle"></i>
        </span>

        {
          // Début fenêtre pop up - ceci ne contient que les informations
          this.state.showInfo && (
            <div className="showInfos">
              <div className="infosContent">
                <div className="head">
                  <h2>{name}</h2>
                  <div className="sourceCode">
                    <a
                      href={source}
                      rel="noopener noreferrer"
                      className="button"
                      target="_blank"
                    >
                      Code source du projet
                    </a>
                  </div>
                  <div className="button return" onClick={this.handleInfo}>
                    Retour à la page
                  </div>
                  <p className="text">{info}</p>
                </div>
              </div>
            </div>
          )
        }
      </div>
    );
  }
}
