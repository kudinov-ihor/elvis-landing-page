import React from 'react';
import './title.scss';

function SectionTitle({title}) {
  return (
    <div className="section-header">
        <h2 className="section-header__title">{title}</h2>
    </div>
  )
}

export default SectionTitle