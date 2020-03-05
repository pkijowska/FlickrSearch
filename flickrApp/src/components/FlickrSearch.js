import React, { Component } from 'react';
import Gallery from './Gallery';
import SearchForm from './SearchForm';
import jsonp from 'jsonp-es6';



class FlickrSearch extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      data: []
    };
  this.fetchImages = this.fetchImages.bind(this);
  }

  fetchImages =(q) =>  {
    console.log('Searching Flickr for', q);
    const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';
    const flickrParams = {
      method: 'flickr.photos.search',
      api_key: '2f5ac274ecfac5a455f38745704ad084',
      text: q,
      format: 'json',
      tag_mode: 'any',
      extras: 'url_n, owner_name, date_taken, tags'
    };


    jsonp(flickrURL, flickrParams, { callback: "jsoncallback" }).then(
     results => {
        if(results.photos){
          this.setState({data: results.photos.photo});
        }
      }
    );
  }

  render() {
    return (
      <div>
        <h1>Image Search</h1>
          <SearchForm onChange={ this.fetchImages } />
          <Gallery data={this.state.data} images={ this.state.images } />
      </div>
    )
  }
}

export default FlickrSearch;
