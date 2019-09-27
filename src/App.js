import React from 'react';
import './App.css';
import NasaPhoto from './PhotoOfDayComponents/NasaPhotoOfDay.js';

// import { Link } from 'reactstrap';
// import renderer from 'react-test-renderer';

// it('renders correctly', () => {
//   const tree = renderer
//     .create(<Link page="http://www.facebook.com">Facebook</Link>)
//     .toJSON();
//   expect(tree).toMatchSnapshot();
// });

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
