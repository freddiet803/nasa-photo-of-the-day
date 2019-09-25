import React from 'react';
import '../App.css';

export default function NasaApodCard(props) {
  return (
    <div className="APOD-card">
      <h3>{props.title}</h3>
      <h5>{props.date}</h5>
      <button
        onClick={() => {
          alert('clicked pic');
        }}
      >
        <img src={props.url} alt="The Picture" />
      </button>
      <p>{props.explanation}</p>
    </div>
  );
}
