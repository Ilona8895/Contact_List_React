import { useState } from "react";
import { Form } from "./components/Form";
import { PersonInfo } from "./components/PersonInfo";

import "./App.css";

const initialPeople = [
  {
    name: "Ilona",
    surname: "Melcher",
    city: "Gliwice",
    tel: 123456789,
  },
  {
    name: "Dawid",
    surname: "Melcher",
    city: "Kraków",
    tel: 736491284,
  },
  {
    name: "Przemysław",
    surname: "Czarnek",
    // city: "Zakpane",
    tel: 307008802,
  },
];

function App() {
  const [isFormShown, setIsFormShown] = useState(false);
  const [people, setPeople] = useState(initialPeople);

  const handleFormShowCLick = () => setIsFormShown(true);

  function addPerson(data) {
    console.log(data);
    const newPeople = [...people, data];
    setPeople(newPeople);
    setIsFormShown(false);
  }

  return (
    <>
      <h1>Lista kontaktów</h1>
      {isFormShown ? (
        <Form onAddPerson={addPerson} />
      ) : (
        <button onClick={handleFormShowCLick}>Dodaj</button>
      )}
      <ul>
        {people.map((person) => (
          <PersonInfo
            key={person.tel}
            name={person.name}
            surname={person.surname}
            tel={person.tel}
            city={person.city}
          />
        ))}
      </ul>
    </>
  );
}

export default App;
