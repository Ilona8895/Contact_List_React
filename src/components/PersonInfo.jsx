import { Tel } from "./Tel";
import { useState } from "react";
import { Form } from "./Form";

import "./PersonInfo.css";

export const PersonInfo = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModify, setModify] = useState(false);
  const [values, setValues] = useState(props);

  const buttonEl = (
    <button
      onClick={() => {
        setIsExpanded(!isExpanded);
      }}
    >
      {isExpanded ? "Schowaj" : "Pokaż"}
    </button>
  );

  const handleDeletePerson = (e) => {
    e.target.closest("li").remove();
  };

  function modPerson(data) {
    // console.log(props);
    // console.log(data);
    setValues(data);
    setModify(false);
  }

  const handleModifyPerson = () => {
    setModify(true);
  };

  return (
    <>
      <li className={isExpanded ? "active" : ""}>
        <h2>
          {values.name} {values.surname}
        </h2>
        {buttonEl}

        {isExpanded && (
          <>
            <h3>
              Tel: <Tel tel={values.tel} />
            </h3>
            {values.city && <h3>Miasto: {values.city}</h3>}
          </>
        )}
        <button onClick={handleModifyPerson}>Modyfikuj</button>
        <button onClick={handleDeletePerson}>Usuń</button>
      </li>
      {isModify && <Form modPersonForm={values} onModPerson={modPerson} />}
    </>
  );
};
