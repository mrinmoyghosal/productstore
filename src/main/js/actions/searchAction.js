import apiClient from '../apiClient';

export const searchRequest = () => ({
  type: 'SEARCH_REQUEST'
});

export const getRecommendationRequest = () => ({
  type: 'GET_RECOMMENDATION'
});

export const getRecommendationRequestOk = (result) => ({
  type: 'GET_RECOMMENDATION_OK', result
});

export const searchSuccess = (result) => ({
  type: 'SEARCH_SUCCESS', result
});

export const searchFailure = (error) => ({
  type: 'SEARCH_FAILURE', error
});

export function search(title) {
  return (dispatch) => {
    dispatch(searchRequest());

    apiClient.query(title)
      .then(response => {
        dispatch(searchSuccess(response.data))
      })
      .catch(error => {
        dispatch(searchFailure(error.response.data))
      });
  }
}

export function getPage(path) {
    return (dispatch) => {
      dispatch(searchRequest());
  
      apiClient.getPage(path)
        .then(response => {
          dispatch(searchSuccess(response.data))
        })
        .catch(error => {
          dispatch(searchFailure(error.response.data))
        });
    }
}

export function getDashboard() {
    return (dispatch) => {
      dispatch(searchRequest());
  
      apiClient.getProducts()
        .then(response => {
          dispatch(searchSuccess(response.data))
        })
        .catch(error => {
          dispatch(searchFailure(error.response.data))
        });
    }
}

export function getRecommendation() {
  return (dispatch) => {
    dispatch(getRecommendationRequest());

    apiClient.getRecommendation()
      .then(response => {
        dispatch(getRecommendationRequestOk(response.data))
      })
      .catch(error => {
        dispatch(searchFailure(error.response.data))
      });
  }
}
