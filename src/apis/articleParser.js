import read from 'readability-js';

export default (url) => {
  if (url) {
    read(url, (err, article, meta) => {
      try {
        const contents = {
          'title': article.title,
          'content': article.content,
          'source': article.html,
          'dom': article.document,
          'responseObj': article.meta
        }
        article.close();
        return contents
      }
      catch (err) {
        console.log(err)
      }
    });
  } else {
    return {
      'title': 'loading...',
      'content': 'loading...',
      'source': 'loading...',
      'dom': 'loading...',
      'responseObj': 'loading...'
    }
  }

}
