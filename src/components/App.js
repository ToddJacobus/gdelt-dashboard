import React from 'react';
import ArticleList from './ArticleList'
import SearchBar from './SearchBar'


class App extends React.Component {

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar />
        <ArticleList />
      </div>
    );
  }
}

export default App;
