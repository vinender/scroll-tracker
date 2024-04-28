import React, { useState, useEffect } from 'react';

const cities = {
  Germany: 'Berlin',
  Berlin: 'Germany',
  India: 'Delhi',
  Delhi: 'India',
  France: 'Paris',
  Paris: 'France',
  Japan: 'Tokyo',
  Tokyo: 'Japan',
};

const shuffleArray = (array) => {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

const Game = ({ cities }) => {
  const [selected, setSelected] = useState([]);
  const [matched, setMatched] = useState([]);
  const [buttons, setButtons] = useState([]);

  useEffect(() => {
    const citiesList = Object.keys(cities);
    setButtons(shuffleArray(citiesList));
  }, []);

  const handleClick = (city) => {
    if (selected.length === 0) {
      setSelected([city]);
    } else if (selected.length === 1) {
      const selectedCity = selected[0];
      if (cities[selectedCity] === city || cities[city] === selectedCity) {
        setMatched([...matched, selectedCity, city]);
        setSelected([]);
      } else {
        setSelected([selectedCity, city]);
      }
    } else {
      setSelected([city]);
    }
  };

  return (
    <div className="flex flex-wrap justify-center">
      {buttons.map((city) => (
        <button
          key={city}
          className={`m-2 p-2 ${selected.includes(city) ? 'bg-blue-500' : ''} ${
            matched.includes(city) ? 'hidden' : ''
          } ${
            selected.length === 2 &&
            !matched.includes(city) &&
            selected.indexOf(city) === 1 &&
            (!selected.includes(cities[selected[0]]) ||
              !selected.includes(cities[city]))
              ? 'bg-red-500'
              : ''
          }`}
          onClick={() => handleClick(city)}
        >
          {city}
        </button>
      ))}
      {matched.length === Object.keys(cities).length * 2 ? (
        <p className="m-2 p-2 text-green-500">Congratulations! You matched all the pairs!</p>
      ) : buttons.length === 0 ? (
        <p className="m-2 p-2 text-green-500">Congratulations! No more buttons left!</p>
      ) : null}
    </div>
  );
};

const App = () => {
  return (
    <div className="container mx-auto">
      <Game cities={cities} />
    </div>
  );
};

export default App;