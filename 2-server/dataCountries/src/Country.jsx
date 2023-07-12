const Country = ({ countries }) => {
  return (
    <div>
      <h2>{countries[0].name.common}</h2>
      <h3>Capital: {countries[0].capital}</h3>
      <h3>Area: {countries[0].area}</h3>

      <img src={countries[0].flags.png} alt={countries[0].name.common} />
    </div>
  );
};
export default Country;
