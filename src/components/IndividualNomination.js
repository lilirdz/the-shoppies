import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

function IndividualNomination(props) {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    props.removeNominatedMovie(props.nomination.imdbID);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const { Title, Year } = props.nomination;

  return (
    <div className="movie">
      <li>
        {Title} ({Year}){" "}
        <button className="remove-btn" onClick={handleClick}>
          Remove
        </button>
      </li>
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Movie has been removed from your nominations!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default IndividualNomination;
