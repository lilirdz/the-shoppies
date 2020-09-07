import React from "react";
import IndividualNomination from "./IndividualNomination";

const Nominations = (props) => {
  return (
    <div className="nominations-component">
      <h2>Nominations</h2>
      {props.nominations.length >= 5 ? (
        <h3>You have {props.nominations.length} nominations</h3>
      ) : null}
      {props.nominations.map((nomination) => (
        <IndividualNomination
          nomination={nomination}
          removeNominatedMovie={props.removeNominatedMovie}
        />
      ))}
    </div>
  );
};

export default Nominations;
