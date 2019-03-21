import React from 'react';
import { connect } from 'react-redux';
import { fetchArticles } from '../actions'

class SearchBar extends React.Component {
  state = {
    searchFieldValue: ''
  }

  onInputChange = (event) => {
    this.setState({searchFieldValue:event.target.value})
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.fetchArticles(this.state.searchFieldValue)
  }

  render () {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Topic Search</label>
            <input type="text" value={this.state.searchFieldValue} onChange={this.onInputChange}/>
          </div>
        </form>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {search: state.search}
}

export default connect(
  mapStateToProps,
  { fetchArticles }
)(SearchBar);
