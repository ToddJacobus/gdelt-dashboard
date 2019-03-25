import read from 'readability-js';

export default (url) => {
  console.log('Fetching article details...')
  if (url) {
    // TODO: fix error with api, or find a new api that works more easily...
    // Keeps passing undefined into callback.
    read(url, (err, article, meta) => {
      console.log(article)
      console.log(meta)
      console.log(err)
    });
  } else {
    console.log("Still loading...")
    return {
      'title': 'loading...',
      'content': 'loading...',
      'source': 'loading...',
      'dom': 'loading...',
      'responseObj': 'loading...'
    }
  }

}



// try {
//   const contents = article
//   const contents = {
//     'title': article.title,
//     'content': article.content,
//     'source': article.html,
//     'dom': article.document,
//     'responseObj': article.meta
//   }
//   article.close();
//   console.log("Hurray!")
//   return contents
// }
// catch (err) {
//   console.log("woopsy... " + err)
//   return {
//     'title': 'Could not fetch article detail...',
//     'content': '',
//     'source': '',
//     'dom': '',
//     'responseObj': ''
//   }
// }
