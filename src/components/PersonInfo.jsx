/* eslint-disable react/prop-types */
import { Tel } from "./Tel";
import { useState } from "react";

export const PersonInfo = (props) => {
  // let stateArray = useState(false);
  // let isExpanded = stateArray[0];
  // let setIsExpanded = stateArray[1];
  const [isExpanded, setIsExpanded] = useState(false);

  // const [isFormShown, setIsFormShown] = useState(false);

  const buttonEl = (
    <button
      onClick={() => {
        setIsExpanded(!isExpanded);
      }}
    >
      {isExpanded ? "Schowaj" : "Pokaż"}
    </button>
  );

  // const handleEditFormShowClick = (e) => {
  //   console.log(e.target);
  //   setIsFormShown(true);
  // };

  return (
    <>
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

      {/* <button onClick={handleEditFormShowClick}>Modyfikuj</button> */}

      <hr />
    </>
  );
};
