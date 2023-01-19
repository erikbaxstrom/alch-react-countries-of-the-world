export default function Controls({ countries, selectedContinent, setSelectedContinent }) {
  //   console.log('Controls countries', countries);
  const continentsList = [...new Set(countries.map((country) => country.continent))].filter(
    (continent) => continent !== null
  );
  //   console.log(continentsList);
  return (
    <select defaultValue="all" onChange={(e) => setSelectedContinent(e.target.value)}>
      <option value="all">All</option>
      {continentsList.map((continent) => (
        <option key={continent} value={continent}>
          {continent}
        </option>
      ))}
    </select>
  );
}
