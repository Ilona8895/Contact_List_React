import { useState } from "react";
import { Form } from "./components/Form";
import { PersonInfo } from "./components/PersonInfo";

import "./App.css";

const initialPeople = [
  {
    name: "Anna",
    surname: "Kowalska",
    city: "Kraków",
    tel: 123999555,
  },
  {
    name: "Piotr",
    surname: "Nowak",
    city: "Warszawa",
    tel: 234847634,
  },
  {
    name: "Justyna",
    surname: "Nowacka",
    // city: "Zakpane",
    tel: 894755221,
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
