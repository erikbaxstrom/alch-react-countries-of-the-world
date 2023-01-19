export default function Controls({ countries, setSelectedContinent }) {
  const continentsList = [...new Set(countries.map((country) => country.continent))].filter(
    (continent) => continent !== null
  );
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
