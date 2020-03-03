import React, {Component} from 'react';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {string: ''};
    this._handleInput = this._handleInput.bind(this);

  }

  _handleInput(event){
    this.setState( {string: event.target.value} );
    console.log(this.state.string);
  }

  render(){
    return(
      <div>
      <h2>Search coming soon</h2>
      <label>What are you looking for?</label>
      <input type="search" placeholder="search" onInput={ this._handleInput }/>
      </div>
    )
  };
}

export default SearchForm;
