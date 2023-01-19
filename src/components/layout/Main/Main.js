//import, then call useCountries and console log the result: {continent: 'Antarctica', id: 1, name: 'Erikland', iso2: 'EB', ...}
// put Main component in App.js
// css

import React, { useState } from 'react';
import Controls from '../Controls/Controls';

import { useCountries } from '../../../hooks/useCountries';
import CountryCard from '../../CountryCard/CountryCard';

import './Main.css';

export default function Main() {
  const { countries, error } = useCountries();
  const [selectedContinent, setSelectedContinent] = useState('all');
  //   console.log('main Countries', countries, error);

  return (
    <main>
      <Controls {...{ countries, selectedContinent, setSelectedContinent }} />
      <h1>{error}</h1>
      <div className="display">
        {countries.map((country) => (
          <CountryCard key={country.iso2} {...country} />
        ))}
      </div>
    </main>
  );
}
