import { combineReducers } from 'redux'
import inventory from './inventory'
import product from './product'
import productReview from './product-review'
import transaction from './transaction'
import user from './user'
import vendor from './vendor'
import vendorReview from './vendor-review'

const reducer = combineReducers({
  inventory,
  product,
  productReview,
  transaction,
  user,
  vendor,
  vendorReview
})

export default reducer
