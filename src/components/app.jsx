import React, { Component } from 'react';
import giphy from 'giphy-api';
import Search from './search';
import Gif from './gif';
import GifList from './gifList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "xT9IgDEI1iZyb2wqo8"
    };
  }

  searchForGif = (query) => {
    giphy('aUkQMCwL5jeldLUZkxT9y0TiU69KYa99').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, results) => {
      this.setState({
        gifs: results.data
      });
    });
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render () {
    return (
      <div>
        <div className="left-scene">
          <Search searchFunction={this.searchForGif} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
