import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { getAllProduct } from './action-creators/product'

/* CONTAINERS */
import Root from './containers/'
import Home from './containers/Home'
import Product from './containers/Product'

/* ROUTES COMPONENT */
const RoutesComponent = ({ loadAllProduct }) => (
  <Router history={browserHistory}>
    <Route path="/" component={Root}>
      <IndexRoute component={Home} />
      <Route path="home" component={Home} />
      <Route path="product" component={Product} onEnter={loadAllProduct} />
    </Route>
  </Router>
)

/* ROUTES CONTAINER */
const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => {
  return {
    loadAllProduct: () => dispatch(getAllProduct())
  }
}

const Routes = connect(mapStateToProps, mapDispatchToProps)(RoutesComponent)

export default Routes
