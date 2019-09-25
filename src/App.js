import React from 'react';
import './App.css';
import NasaPhoto from './PhotoOfDayComponents/NasaPhotoOfDay.js';

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <div>
        <NasaPhoto />
      </div>
    </div>
  );
}

export default App;
