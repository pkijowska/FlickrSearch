import React, {Component} from 'react';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {string: ''};
    this._handleInput = this._handleInput.bind(this);

  }

  _handleInput(event){
    this.setState( {string: event.target.value} );
    console.log(this.state.string, "searchForm string");
    this.props.onChange(event.target.value);
  }

  render(){
    return(
      <div>
      <label>What are you looking for?</label>
      <input type="search" placeholder="search" required onChange={ this._handleInput } />
      </div>
    )
  };
}

export default SearchForm;
