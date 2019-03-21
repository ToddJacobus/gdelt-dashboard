import gdeltDaily from "../apis/gdeltDaily";
import getDetails from "../apis/articleParser"

export const fetchArticles = (search="") => async dispatch => {

  let queryString = ""
  if (search.length > 0) {
    queryString = `query="${search}"&`
  }
  console.log(`?${queryString}toneabs>0&format=GeoJSON&sortby=Count&TIMESPAN=1440`)
  const response = await gdeltDaily.get(`?${queryString}toneabs>0&format=GeoJSON&sortby=Count&TIMESPAN=1440`);
  dispatch({type:'GET_ARTICLES', payload: response.data.features})
};



export const loadArticleDetails = (url) => async dispatch => {
  const articleDetails = getDetails(url)
  dispatch({type:'GET_DETAILS', payload: articleDetails})
}
