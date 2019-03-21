import React from 'react';
import { connect } from 'react-redux';
import { loadArticleDetails } from '../actions'

class ArticleDetail extends React.Component {

  render () {
    return (
      <div>
        <h2>Title</h2>
        <p>Some other fun facts...</p>
      </div>
    )
  }
}

export default ArticleDetail;
