import React from 'react';
import { connect } from 'react-redux';

import { getPage, getRecommendation } from '../actions/searchAction';


const Pagination = ({...props}) => (

    Object.keys(props.products._links).map( (key, index) => {
      let paginationKeys = ['first', 'next',  'prev', 'last']
      if(paginationKeys.includes(key))
        return <a key={index} name='first_page' onClick={() => props.getPage(props.products._links[key].href)} > {key} |</a>
        
    })

)

const ProductGallery = ({...props }) => (
    
    <div className='product_gallery row col-lg-12'>
       {props.products.page.totalElements > 0 ?    
          props.products._embedded.products.map((product, i) => (
            <div className='col-lg-3 card' key={i}>
              <h5>Name : { product.name}</h5>
              <h5>Price: { product.price }</h5>
            </div>
          )):
          (props.searchStatus !== 'GET_RECOMMENDATION_OK' ? props.getRecommendation() :null)
      }  
      <div className='pagination row'><Pagination products= { props.products } getPage= { props.getPage } /></div>
    </div> 

  )

const mapStateToProps = (state) => (
  {
    searchStatus: state.status.search,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    getPage(path) {
      dispatch(getPage(path))
    },
    getRecommendation() {
      dispatch(getRecommendation())
    }
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(ProductGallery);
