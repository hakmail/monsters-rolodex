import {Component} from 'react';
//import logo from './logo.svg';
import './App.css';

import {CardList} from './components/card-list/card-list.cpmponents';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component{
  constructor(){
    super();

    this.state = {
      string: "Hello Hamed",
      monsters:[
        {
          name: 'Frankenstein',
          id: 'n1'
        },
        {
          name: 'Dracula',
          id: 'n2'
        },
        {
          name: 'Zombie',
          id: 'n3'
        }
      ],
      searchField: ''
    }
    //this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}))
  }

  handleChange = e => {
    this.setState({searchField:e.target.value})
  }
  render(){
    const {monsters, searchField} = this.state;
    const filterdMonsters = monsters.filter( monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
      <h1> Monsters Rolodex </h1>
      <SearchBox
        placeholder="Search Monsters" 
        handleChange = {this.handleChange}
      />
      <CardList monsters = {filterdMonsters}>
        {/*
          this.state.monsters.map(monster => 
            (<h1 key={monster.id}>{monster.name}</h1>)
          )
        */}
        </CardList>
        {/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.string}
          </p>
          <button onClick={() => this.setState({string: "Hello Hamed Ali Khan"})}>Change Text</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        
          this.state.monsters.map(monster => 
            (<h1 key={monster.id}>{monster.name}</h1>)
          )
          */}
      </div>
    );
  }
}

export default App;
