export default function Controls({ countries, display, setDisplay }) {
  console.log('Controls countries', countries);
  const continents = [...new Set(countries.map((country) => country.continent))];
  console.log(continents);
  return (
    <select>
      <option value="All">All</option>
      {continents
        .filter((continent) => continent !== null)
        .map((continent) => (
          <option key={continent} value={continent}>
            {continent}
          </option>
        ))}
    </select>
  );
}
