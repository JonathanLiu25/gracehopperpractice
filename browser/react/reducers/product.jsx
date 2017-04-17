import {
  READ_ALL_PRODUCT,
  READ_SELECTED_PRODUCT,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT
} from '../constants/product'

const initialState = {
  allProduct: [],
  selectedProduct: {}
}

const productReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)
  switch (action.type) {

    case READ_ALL_PRODUCT:
      newState.allProduct = action.allProduct
      break

    case READ_SELECTED_PRODUCT:
      newState.selectedProduct = action.selectedProduct
      break

    case CREATE_PRODUCT:
      newState.allProduct = [...newState.allProduct, action.product]
      break

    case UPDATE_PRODUCT:
      newState.allProduct = newState.allProduct.map(product => {
        return product.id === action.product.id ? action.product : product
      })
      break

    case DELETE_PRODUCT:
      newState.allProduct = newState.allProduct.filter(product => product.id !== action.productId)
      break

    default:
      return state
  }

  return newState
}

export default productReducer
