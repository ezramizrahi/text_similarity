import React from 'react';
import './Results.css';

const Results = ({ intersection }) => {
  return (
    <div className="results">
    <span className="text">{'Intersection of A and B: '}</span><span className="left-bracket" span>{'{'}</span>
      {
        [...intersection].map((i, index) => (
          <div className="result">
            {(index ? ', ' : '') + i}
          </div>
        ))
      }
    <span className="right-bracket">{'}'}</span>
    </div>
  )
};

export default Results;
