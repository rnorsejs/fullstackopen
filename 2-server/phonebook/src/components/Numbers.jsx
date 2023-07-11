const Numbers = ({ persons }) => {
  return (
    <div>
      <h3>Numbers</h3>
      {persons.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      ))}
    </div>
  );
};
export default Numbers;
