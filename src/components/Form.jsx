/* eslint-disable react/prop-types */
import { useState } from "react";

import "./Form.css";

export const Form = ({ onAddPerson, modPersonForm, onModPerson }) => {
  const [name, setName] = useState(modPersonForm ? modPersonForm.name : "");
  const [surname, setSurname] = useState(
    modPersonForm ? modPersonForm.surname : ""
  );
  const [tel, setTel] = useState(modPersonForm ? modPersonForm.tel : "");
  const [city, setCity] = useState(modPersonForm ? modPersonForm.city : "");

  return (
    <form
      action=""
      onSubmit={(e) => {
        e.preventDefault();

        if (modPersonForm) onModPerson({ name, surname, tel, city });
        if (onAddPerson) onAddPerson({ name, surname, tel, city });
      }}
    >
      <div>
        <input
          defaultValue={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          placeholder="Imię"
        />
      </div>
      <div>
        <input
          defaultValue={surname}
          onChange={(e) => {
            setSurname(e.target.value);
          }}
          type="text"
          name="surname"
          placeholder="Nazwisko"
        />
      </div>
      <div>
        <input
          defaultValue={tel}
          onChange={(e) => {
            setTel(e.target.value);
          }}
          type="tel"
          name="tel"
          placeholder="Telefon"
        />
      </div>
      <div>
        <input
          defaultValue={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
          type="text"
          name="city"
          placeholder="Misto"
        />
      </div>
      <button
        disabled={name.length === 0 || surname.length === 0 || tel.length === 0}
        type="submit"
      >
        Zapisz
      </button>
    </form>
  );
};
