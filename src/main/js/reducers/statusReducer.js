const initialState = {
    search: '',
    searchError: '',
  }
  
  export default (state = initialState, action) => {
    const actionHandlers = {
      // search statuses
      'SEARCH_REQUEST': {
        search: 'PENDING',
        searchError: '',
      },
      'SEARCH_SUCCESS': {
        search: 'SUCCESS', 
        searchError: '',      
      },
      'SEARCH_FAILURE': {
        search: 'ERROR',
        searchError: action.error, 
      },
      'GET_RECOMMENDATION': {
        search: 'GET_RECOMMENDATION',
        searchError: '', 
      },
      'GET_RECOMMENDATION_OK': {
        search: 'GET_RECOMMENDATION_OK',
        searchError: '', 
      },
    }
  
    const statesToUpdate = actionHandlers[action.type];
    state = Object.assign({}, state, statesToUpdate);
    return state;
  }