import React from 'react';
import { connect } from 'react-redux';
import { fetchArticles } from '../actions'

import ArticleDetail from './ArticleDetail'

// this is a class-based component because we need to define a 'component-did-mount'
// class method.
// This method calls the action creator that is responsible for sending the right
// action object to the reducer which will actually make the API request and fetch
// the data.
class ArticleList extends React.Component {

  componentDidMount() {
    this.props.fetchArticles()
  }

  getInfoFromHtml (html) {
    // regex = 'href=\\"'
    if (html) {
        let dummy = document.createElement('html')
        dummy.innerHTML = html
        return {
          'url':dummy.getElementsByTagName('a')[0].href,
          'title':dummy.getElementsByTagName('a')[0].title
        }
    } else {
        return {
          'url':'',
          'title':''
        }
    }

  }

  // TODO: Pass the article url down to ArticleList component as a prop so that
  //       the right details can be requested.
  renderList() {
    return this.props.articles.map(article => {
      return (
        <div className="item" key={this.props.articles.indexOf(article)}>
          <img className="ui image small" src={article.properties.shareimage} alt="#" />
          <div className="content">
            <div className="description">
              <h2>{this.getInfoFromHtml(article.properties.html).title}</h2>
              <ArticleDetail url={this.getInfoFromHtml(article.properties.html).url}/>
              <br/>
              <h4>{article.properties.name}</h4>
              <p>Event Count: {article.properties.count}</p>
            </div>
          </div>
        </div>
      );
    });
  }

  render () {
    console.log(this.props.articles.length)
    return <div className="ui relaxed divided list"> {this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    articles: state.articles,
  };
};

export default connect(
  mapStateToProps,
  { fetchArticles }
)(ArticleList);
