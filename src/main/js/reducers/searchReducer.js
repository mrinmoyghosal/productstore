const initialState = {
    _embedded: { products: [] },
    _links: {},
    page: {}
}
  
export default (state = initialState, action) => {
    if (action.type === 'SEARCH_SUCCESS') {
        state = action.result;
    }
    if (action.type === 'GET_RECOMMENDATION_OK'){
        state = action.result
    }
    return state;
}