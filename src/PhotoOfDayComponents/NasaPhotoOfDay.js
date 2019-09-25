import React, { useState, useEffect } from 'react';
import NasaApodCard from './NasaAPODCard.js';
import axios from 'axios';

export default function NasaPhoto() {
  const [apod, setApod] = useState([]);

  useEffect(() => {
    async function getAPOD() {
      try {
        const photoInfo = await axios.get(
          'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'
        );
        setApod(photoInfo.data);
        console.log(photoInfo);
      } catch (err) {
        console.log(err);
      }
    }

    getAPOD();

    return () => {
      //undo mount
    };
  }, []); // run only after first render

  return (
    // <div className="photo-page">
    //   {apod.map(card => {
    //     return (
    //       <NasaApodCard
    //         title={card.title}
    //         explanation={card.explanation}
    //         url={card.url}
    //         date={card.date}
    //       />
    //     );
    //   })}
    // </div>
    <div>
      <NasaApodCard
        title={apod.title}
        explanation={apod.explanation}
        url={apod.url}
        date={apod.date}
      />
    </div>
  );
}
