import React from 'react';

const Experience = () => {
  return (
    <div className="experience">
      <h3>Experience</h3>
      <div className="exp-1">
        <h4>Développeur frontend</h4>
        <h5>04/2022-{(new Date().getMonth() + 1).toString().padStart(2, "0")}/{new Date().getFullYear()}</h5>
        <p>
          Développement frontend avec React et backend avec Java Spring.
          Eiusmod aliqua eu enim sint sit nisi elit ipsum laboris sit anim consectetur.
          Fugiat dolore aute aliquip cillum labore.
          Commodo sit esse id voluptate consequat duis enim reprehenderit eu dolor.
          Velit irure quis in deserunt.
        </p>
      </div>
      <div className="exp-2">
        <h4>Développeur full stack</h4>
        <h5>09/2021-04/2022</h5>
        <p>
          Développement frontend avec React et backend avec Java Spring.
          Eiusmod aliqua eu enim sint sit nisi elit ipsum laboris sit anim consectetur.
          Fugiat dolore aute aliquip cillum labore.
          Commodo sit esse id voluptate consequat duis enim reprehenderit eu dolor.
          Velit irure quis in deserunt.
        </p>
      </div>
      <div className="exp-3">
        <h4>Séducteur du dimanche (et les autres jours aussi)</h4>
        <h5>11/01/2000-Aujourd'hui</h5>
        <p>
          Eiusmod aliqua eu enim sint sit nisi elit ipsum laboris sit anim consectetur.
          Fugiat dolore aute aliquip cillum labore.
          Commodo sit esse id voluptate consequat duis enim reprehenderit eu dolor.
          Velit irure quis in deserunt.
        </p>
      </div>
    </div>
  );
};

export default Experience;
