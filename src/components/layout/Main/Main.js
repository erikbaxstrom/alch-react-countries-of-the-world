//import, then call useCountries and console log the result: {continent: 'Antarctica', id: 1, name: 'Erikland', iso2: 'EB', ...}
// put Main component in App.js
// css
import { useCountries } from '../../../hooks/useCountries';
import CountryCard from '../../CountryCard/CountryCard';

import './Main.css';

export default function Main() {
  const { countries, error } = useCountries();
  //   console.log('main Countries', countries);

  return (
    <main>
      <h1>{error}</h1>
      {countries.map((country) => (
        <CountryCard key={country.iso2} {...country} />
      ))}
    </main>
  );
}
