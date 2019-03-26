import gdeltDaily from "../apis/gdeltDaily";
import getDetails from "../apis/articleParser"
import read from 'readability-js';

export const fetchArticles = (search="") => async dispatch => {

  let queryString = ""
  if (search.length > 0) {
    queryString = `query="${search}"&`
  }
  console.log(`?${queryString}toneabs>0&format=GeoJSON&sortby=Count&TIMESPAN=60`)
  const response = await gdeltDaily.get(`?${queryString}toneabs>0&format=GeoJSON&sortby=Count&TIMESPAN=1440`);
  dispatch({type:'GET_ARTICLES', payload: response.data.features})
};

// NOTE: The API returns a response, and readability parses the article just fine.
// However, an empty object is sent along to the Redux store before the response
// is returned from axios...  something to do with the 'await' syntax?

export const loadArticleDetails = (url=null) => async dispatch => {
  const response = await getDetails.get(url);
  dispatch({type:'GET_DETAILS',
    payload:  read(response.data, (err, article, meta) => {
                console.log(article)
                return article
              })
  })
}



// console.log('Fetching article details...')
// if (url) {
//   // TODO: fix error with api, or find a new api that works more easily...
//   // Keeps passing undefined into callback.
//   read(url, (err, article, meta) => {
//     console.log(article)
//     console.log(meta)
//     console.log(err)
//   });
// } else {
//   console.log("Still loading...")
//   return {
//     'title': 'loading...',
//     'content': 'loading...',
//     'source': 'loading...',
//     'dom': 'loading...',
//     'responseObj': 'loading...'
//   }
// }
