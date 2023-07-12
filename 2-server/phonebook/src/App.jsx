import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Form from "./components/Form";
import Numbers from "./components/Numbers";
import personsService from "./services/personsService";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [subName, setSubName] = useState(null);

  useEffect(() => {
    personsService
      .getAll()
      .then((initialPersons) => setPersons(initialPersons));
  }, []);

  const handleNameChange = (e) => setNewName(e.target.value);
  const handlePhoneChange = (e) => setNewPhone(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newEntry = {
      name: newName,
      number: newPhone,
    };

    const isNameExist = persons.filter(
      (person) => newName.toLowerCase() === person.name.toLowerCase()
    );

    if (isNameExist.length) {
      alert(`${newEntry.name} is already on the list`);
      return;
    }

    personsService.create(newEntry).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));
      setSubName(returnedPerson.name);
      setTimeout(() => {
        setSubName(null);
      }, 3000);
    });
  };

  const handleFilter = (e) => {
    const filteredPersons = persons.filter((person) =>
      person.name.toLowerCase().includes(e.target.value)
    );
    setPersons(filteredPersons);
  };

  const handleDeletion = (id) => {
    personsService.remove(id);
    setPersons(persons.filter((p) => (p.id !== id ? p : null)));
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification subName={subName} />
      <Filter handleFilter={handleFilter} />
      <Form
        handleFormSubmit={handleFormSubmit}
        newName={newName}
        handleNameChange={handleNameChange}
        newPhone={newPhone}
        handlePhoneChange={handlePhoneChange}
      />
      <Numbers persons={persons} handleDeletion={handleDeletion} />
    </div>
  );
};

export default App;
