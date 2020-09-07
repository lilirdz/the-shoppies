import React from "react";
import Search from "./components/Search";
import SearchResults from "./components/SearchResults";
import Nominations from "./components/Nominations";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

const URL = (term) => {
  return `https://www.omdbapi.com/?s=${term}&type="movie"&apikey=${process.env.REACT_APP_API_KEY}`;
};

const style = {
  color: "#40bcd8",
  marginTop: 100,
};

class App extends React.Component {
  state = {
    movies: [],
    isLoading: true,
    searchTerm: "",
    nominations: [],
  };

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = () => {
    fetch(URL(this.state.searchTerm))
      .then((res) => res.json())
      .then((moviesObj) => {
        this.setState({
          movies: moviesObj.Search,
          isLoading: false,
        });
      });
  };

  changeSearchTerm = (term) => {
    this.setState({
      searchTerm: term,
    });
    setTimeout(() => {
      this.fetchMovies();
    }, 1000);
  };

  nominateMovie = (movie) => {
    this.setState({
      nominations: [...this.state.nominations, movie],
    });
  };

  removeNominatedMovie = (movieID) => {
    let movieToRemove = this.state.nominations.find(
      (movie) => movie.imdbID === movieID
    );

    this.setState({
      nominations: this.state.nominations.filter(
        (movie) => movie.imdbID !== movieToRemove.imdbID
      ),
    });
  };

  render() {
    return (
      <div className="App">
        <h1>The Shoppies</h1>
        {this.state.isLoading ? (
          <CircularProgress style={style} />
        ) : (
          <>
            <Grid container spacing={2}>
              <Grid item md={2}></Grid>
              <Grid item md={10}>
                <Search changeTerm={this.changeSearchTerm} />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item md={2}></Grid>
              <Grid item md={4}>
                <SearchResults
                  searchTerm={this.state.searchTerm}
                  movies={this.state.movies}
                  nominateMovie={this.nominateMovie}
                />
              </Grid>

              <Grid item md={4}>
                <Nominations
                  nominations={this.state.nominations}
                  removeNominatedMovie={this.removeNominatedMovie}
                />
              </Grid>
            </Grid>
          </>
        )}
      </div>
    );
  }
}

export default App;
