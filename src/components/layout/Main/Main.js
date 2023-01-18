//import, then call useCountries and console log the result: {continent: 'Antarctica', id: 1, name: 'Erikland', iso2: 'EB', ...}
// put Main component in App.js
// css
import { useCountries } from '../../../hooks/useCountries.js';

export default function Main() {
  const { countries, error } = useCountries();
  //   console.log('main Countries', countries);

  return (
    <main>
      <h1>{error}</h1>
      {countries.map((country) => (
        <div key={country.iso2}>
          <h2>{country.name}</h2>
          <img
            src={`https://flagcdn.com/72x54/${country.iso2.toLowerCase()}.png
`}
          ></img>
          <h3>{country.continent}</h3>
        </div>
      ))}
    </main>
  );
}
