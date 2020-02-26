import React, { Component } from 'react';
import './App.css';
import Card from './component/Card/Card';
import CardList from './component/card-list/Card-list';
import Search from './component/Search-box/Search';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [
        
      ],
      searchFeild: ""
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters : users}))

  }
  handleChange = () =>{
    this.setState({
      searchFeild : event.target.value
    })
  }

  render() {
    const {monsters,searchFeild} = this.state;
    const filterMonster = monsters.filter(monster => monster.name.toLowerCase().includes(searchFeild.toLowerCase()))
    return (
      
       <div className ="app"> 
       <h1>Monsters Rolodex</h1>
      <Search type= "search" placeholder="search" onChange={this.handleChange}></Search>
      <CardList monsters ={filterMonster}></CardList>
      </div>
    );
    
  }
}

export default App;
