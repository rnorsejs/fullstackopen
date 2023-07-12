const Numbers = ({ persons, handleDeletion }) => {
  return (
    <div>
      <h3>Numbers</h3>
      {persons.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}
          <button onClick={() => handleDeletion(person.id)}>Delete</button>
        </p>
      ))}
    </div>
  );
};
export default Numbers;
