import React from 'react';
import { connect } from 'react-redux';
import { loadArticleDetails } from '../actions'

class ArticleDetail extends React.Component {
  componentDidMount () {
    // this is dissabled due to memory leak....
    // this.props.loadArticleDetails()

    // this needs to be updated in a way that doesn't crash the browser, but
    // also in a way that makes practical sense.  We don't want to have to keep
    // reloading content...maybe when the user clicks a button? e.g., "show details"
  }

  getHrefFromHtml (html) {
    // regex = 'href=\\"'
    if (html) {
        let dummy = document.createElement('html')
        dummy.innerHTML = html
        return dummy.getElementsByTagName('a')[0].href
    } else {
        return html
    }

  }

  // TODO: Write REGEX to parse url out of stupid html GDELT gives you...
  render () {
    return (
      <div>
        <h2>Title</h2>

        <p>{this.props.html}</p>
        <p>{this.getHrefFromHtml(this.props.html)}</p>
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
