import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import Form from "./components/Form";
import Numbers from "./components/Numbers";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then((response) => setPersons(response.data));
  });

  const handleNameChange = (e) => setNewName(e.target.value);
  const handlePhoneChange = (e) => setNewPhone(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newEntry = {
      name: newName,
      number: newPhone,
    };

    const isExist = persons.filter(
      (person) => newName.toLowerCase() === person.name.toLowerCase()
    );

    if (isExist.length) {
      alert(`${newEntry.name} is already on the list`);
      return;
    }

    setPersons(persons.concat(newEntry));
    setNewName("");
  };

  const handleFilter = (e) => {
    const filteredPersons = persons.filter((person) =>
      person.name.toLowerCase().includes(e.target.value)
    );
    setPersons(filteredPersons);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilter={handleFilter} />
      <Form
        handleFormSubmit={handleFormSubmit}
        newName={newName}
        handleNameChange={handleNameChange}
        newPhone={newPhone}
        handlePhoneChange={handlePhoneChange}
      />
      <Numbers persons={persons} />
    </div>
  );
};

export default App;
