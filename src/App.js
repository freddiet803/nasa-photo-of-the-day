import React from 'react';
import './App.css';
import NasaPhoto from './PhotoOfDayComponents/NasaPhotoOfDay.js';

function App() {
  return (
    <div className="App container">
      <h1>Astronomy Picture of the Day</h1>
      <div>
        <NasaPhoto />
      </div>
    </div>
  );
}

export default App;
