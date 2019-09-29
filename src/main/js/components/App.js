import React from 'react';
import { connect } from 'react-redux';

import SearchContainer from './SearchContainer';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { getPage, getDashboard } from '../actions/searchAction';

class App extends React.Component {

  state = {
    flashMessage: '' ,
  }

  componentDidMount = () => {
    this.props.getDashboard();
  }

  renderErrorFlash = (errorObj) => {
    const message = errorObj.message + ' ' + errorObj.errors.join(',');
    this.flashMessage(message);
  }

  flashMessage = (message) => {
    this.setState({ flashMessage: message });
    setTimeout(() => {
      this.setState({ flashMessage: '' });
    }, 2500)
  }
 
  render() {

    return (
      <Router>
        <div id='app'>
          <Route exact path='/' render={() => (
            <SearchContainer />
          )} />
        </div>
      </Router>
    )
  }
}
const mapDispatchToProps = (dispatch) => (
    {
      getDashboard ()  {dispatch(getDashboard())}
    }
)

export default connect(null, mapDispatchToProps)(App);
