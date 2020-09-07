import React from "react";
import IndividualNomination from "./IndividualNomination";

const Nominations = (props) => {
  return (
    <div className="nominations-component">
      <h2>Nominations</h2>
      <h3>Please nominate 5 movies.</h3>
      {props.nominations.length === 5 ? (
        <>
          <h3 className="nominations-notification">
            You have 5 nominations already. You're finished nominating movies.{" "}
          </h3>
        </>
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
