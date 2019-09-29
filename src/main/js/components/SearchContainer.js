import React from 'react';
import { connect } from 'react-redux';

import ProductGallery from './ProductGallery';
import SearchInputForm from './SearchInputForm';
import { search } from '../actions/searchAction';

const SearchContainer = (props) => (
  <main id='search-container'>
    <SearchInputForm 
      placeholder='Search product title...'
      onSubmit={ (title) => props.search(title) }
    />
    {
      (props.searchStatus === 'SUCCESS' || props.searchStatus === 'GET_RECOMMENDATION_OK')
      ? <ProductGallery
          products={ props.result }
        />
      : null
    }
    {
      (props.searchStatus === 'PENDING')
      ? <h4> Please wait fetching products.. </h4>
      : null
    }
    {
      (props.searchStatus === 'ERROR')
      ? <h4> Error fetching product.. </h4>
      : null
    }
    {
      (props.searchStatus === 'GET_RECOMMENDATION')
      ? <h4> Sorry No Product Found..fetching recommendation.. </h4>
      : null
    }
  </main>
);

const mapStateToProps = (state) => (
  {
    searchStatus: state.status.search,
    searchError: state.status.searchError,
    result: state.search,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    search(title) {
      dispatch(search(title))
    }
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);