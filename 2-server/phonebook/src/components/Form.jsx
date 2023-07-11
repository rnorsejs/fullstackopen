const Form = ({
  handleFormSubmit,
  newName,
  newPhone,
  handleNameChange,
  handlePhoneChange,
}) => {
  return (
    <div>
      <h3>Add a new contact</h3>
      <form onSubmit={handleFormSubmit}>
        <div>
          Name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          Phone: <input value={newPhone} onChange={handlePhoneChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};
export default Form;
