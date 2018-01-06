import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';


const API_KEY = 'AIzaSyB5mrokL2AZqj5ACIC7ORui26TTUW-klcs';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('funfunfunction');
  };

  videoSearch(term) {
    YTSearch({key: API_KEY, term}, (videos) => {
      this.setState({
        videos, selectedVideo: videos[0]
      });
    });
  }

  render(){
    const videoSearch = _.debounce(term => {this.videoSearch(term)}, 300);

    return (
      <div>
        <header className="header">
          <SearchBar onSearchTermChange={videoSearch} />
        </header>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
