import React, { Component } from 'react';
import './cardlist.css'
import Card from '../Card/Card';
class CardList extends Component {
    render() {
        return (

            <div className="card-list">
             {
                 this.props.monsters.map( monster => {
                     return <Card monsters = {monster}></Card>
                 })
             }
            </div>

        );
    }
}

export default CardList;