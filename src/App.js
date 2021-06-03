import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-component/search-component";
// class App extends React.Component
class App extends Component {
  constructor() {
    super();
    // attributes of the class
    this.state = {
      monsters: [],
      searchField: "",
    };
    // if we don't use arrow functions, we would have to bind our methods to the class component
    // we do this in the constructor
    // this.handleChange = this.handleChange.bind(this)
  }
  // performs right after the first render of a page
  // async componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((user) => this.setState({ monsters: user }));
  // }

  async componentDidMount() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const userResponse = await response.json();

    this.setState({ monsters: userResponse });
    let temp = [...this.state.monsters];
    temp.push({ name: "tembear", id: 11, email: "honey@bun.com" });
    this.setState({ monsters: temp });
    console.log(this.state.monsters);
  }

  // arrow functions remove the need to bind 'this' to the context that we specify
  // it will authomatically bind this to app (context which it is defined in)
  // adds handleChange to the lexical scope of app
  handleChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    // object deconstruction
    // variable name in brackets must be the same as key in state
    const { monsters, searchField } = this.state;
    let filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className="App">
        {/* for monster in monsters:
          return <h1>{monster.name}</h1>
          [<h2>{monster.name}</h2>
          <h2>{monster.name}</h2>
          <h2>{monster.name}</h2>
          <h2>{monster.name}</h2>] */}
        <h1>Kitty Cat Attack</h1>
        <SearchBox
          placeholder="Search Monssters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
        {/* {this.state.monsters.map((monster) => {
            return <h2 key={monster.id}>{monster.name}</h2>;
          })}
        </CardList> */}
      </div>
    );
  }
}

export default App;
