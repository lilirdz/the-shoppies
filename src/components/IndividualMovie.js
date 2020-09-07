import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

class IndividualMovie extends React.Component {
  state = {
    open: false,
  };

  handleClick = (movie) => {
    this.props.nominateMovie(movie);
    this.btn.setAttribute("disabled", true);
    this.setState({
      open: true,
    });
  };

  componentDidUpdate(prevProps) {
    if (this.props.movie.imdbID !== prevProps.movie.imdbID) {
      this.btn.removeAttribute("disabled");
    }
  }

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    const { Title, Year } = this.props.movie;
    return (
      <div className="movie">
        <li>
          {Title} ({Year}){" "}
          <button
            className="btn"
            ref={(btn) => {
              this.btn = btn;
            }}
            onClick={() => this.handleClick(this.props.movie)}
          >
            Nominate
          </button>
        </li>
        <Snackbar
          open={this.state.open}
          autoHideDuration={5000}
          onClose={this.handleClose}
        >
          <Alert onClose={this.handleClose} severity="success">
            Movie has been added to your nominations!
          </Alert>
        </Snackbar>

        {this.props.nominations.length === 5
          ? this.btn.setAttribute("disabled", true)
          : null}
      </div>
    );
  }
}

export default IndividualMovie;
