export default function CountryCard({ ...country }) {
  return (
    <>
      <h2>{country.name}</h2>
      <img
        src={`https://flagcdn.com/72x54/${country.iso2.toLowerCase()}.png
`}
      />
      <h3>{country.continent}</h3>
    </>
  );
}
