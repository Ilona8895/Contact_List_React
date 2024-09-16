/* eslint-disable react/prop-types */
import { Tel } from "./Tel";
import { useState } from "react";

import "./PersonInfo.css";

export const PersonInfo = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const buttonEl = (
    <button
      onClick={() => {
        setIsExpanded(!isExpanded);
      }}
    >
      {isExpanded ? "Schowaj" : "Pokaż"}
    </button>
  );

  return (
    <li className={isExpanded ? "active" : ""}>
      <h2>
        {props.name} {props.surname}
      </h2>
      {buttonEl}

      {isExpanded && (
        <>
          <h3>
            Tel: <Tel tel={props.tel} />
          </h3>
          {props.city && <h3>Miasto: {props.city}</h3>}
        </>
      )}
    </li>
  );
};
