import React, { Component } from 'react';
import './Search.css';
class Search extends Component {
    render() {
        return (
            <div className="SEARCHCENTER">
            <input className = "search" placeholder = {this.props.placeholder} onChange= {this.props.onChange} type={this.props.type}>            
            </input>
            </div>
        );
    }
}

export default Search;