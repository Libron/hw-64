import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {Route, Switch} from "react-router";
import TodoPage from "./containers/TodoPage/TodoPage";
import {Container} from "reactstrap";
import MoviesPage from "./containers/MoviesPage/MoviesPage";
import EditMoviePage from "./containers/MoviesPage/EditMoviePage";
import EditTodoPage from "./containers/TodoPage/EditTodoPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <Container>
              <Switch>
                  <Route path="/" exact render={() => (<h1>Welcome to my App</h1>)} />
                  <Route path="/todo/:id/edit" exact component={EditTodoPage} />
                  <Route path="/todo"  exact component={TodoPage} />
                  <Route path="/movies/:id/edit" exact component={EditMoviePage} />
                  <Route path="/movies" exact component={MoviesPage} />
                  <Route render={() => (<h1>Not Found</h1>)} />
              </Switch>
          </Container>
      </div>
    );
  }
}

export default App;
