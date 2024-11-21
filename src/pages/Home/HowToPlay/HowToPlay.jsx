import React from 'react';
import howToPlayData from './constants'; // Ajusta la ruta de importación según sea necesario
import './how.css'
const HowToPlay = ( ) => {
    return (
      <div className="how-to-play-container">
        <h2><span className="highlightedTitle">¿Cómo</span> se juega?</h2>
        {howToPlayData.map((step, index) => (
  <div  >
    <div className={index % 2 === 0 ? 'row' : 'row-reverse'} key={index}  >+
    <div className={index % 2 === 0 ? 'title-ctn' : 'title-ctn-reverse'}>
      <h3>{step.title}</h3>,
    </div>
      <img src={step.icon} alt={step.title} />
    </div>
    <div className='how-to-description'>

    <p>{step.description}</p>
    </div>
  </div>
))}
      </div>
    );
  };
  
  export default HowToPlay;