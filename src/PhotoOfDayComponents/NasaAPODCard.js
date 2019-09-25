import React from 'react';

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
        <img src={props.url} />
      </button>
      <p>{props.explanation}</p>
    </div>
  );
}
