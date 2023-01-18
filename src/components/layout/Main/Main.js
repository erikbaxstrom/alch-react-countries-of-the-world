//import, then call useCountries and console log the result: {continent: 'Antarctica', id: 1, name: 'Erikland', iso2: 'EB', ...}
// put Main component in App.js
// css
import { useCountries } from '../../../hooks/useCountries.js';

export default function Main() {
  const countries = useCountries();
  //   console.log('main Countries', countries);
  return (
    <main>
      {countries.map((country) => (
        <>
          <h2>{country.name}</h2>
          <h3>{country.iso2}</h3>
        </>
      ))}
    </main>
  );
}
