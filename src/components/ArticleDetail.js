import React from 'react';
import { connect } from 'react-redux';
import { loadArticleDetails } from '../actions'

class ArticleDetail extends React.Component {
  onButtonClick () {
    this.props.loadArticleDetails(this.props.url)
    console.log(this.props.detail)
  }

  render () {
    return (
      <div>
        <button onClick={() => this.onButtonClick()} className="ui primary basic button">Show Details</button>

      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    detail: state.detail
  };
};

export default connect(
  mapStateToProps,
  { loadArticleDetails }
)(ArticleDetail);
