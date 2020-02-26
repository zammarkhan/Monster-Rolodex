import React, { Component } from 'react';
import './card.css';

class Card extends Component {
    render() {
        return (
            <div className="card-container">
                <img alt="monsters" src={'https://robohash.org/{props.monster.id}?set=set2&size=180x180'}/>
                <h2>{this.props.monsters.name}</h2>
        <p>{this.props.monsters.email}</p>
            </div>);
    }
}

export default Card;