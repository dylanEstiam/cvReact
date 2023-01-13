import React from 'react';

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Intérêts</h3>

      <ul>
        <li className='hobby'>
          <i className="fas fa-check-square"></i>
          <span>Musculation</span>
        </li>
        <li className='hobby'>
          <i className="fas fa-check-square"></i>
          <span>Animation japonaise</span>
        </li>
        <li className='hobby'>
          <i className="fas fa-check-square"></i>
          <span>Création de jeux</span>
        </li>
        <li className='hobby'>
          <i className="fas fa-check-square"></i>
          <span>Modélisation 3d</span>
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;
