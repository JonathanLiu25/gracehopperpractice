import axios from 'axios'

import {
  READ_ALL_PRODUCT,
  READ_SELECTED_PRODUCT,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT
} from '../constants/product'

/* ACTION-CREATORS */
const readAllProduct = allProduct => ({
  type: READ_ALL_PRODUCT,
  allProduct
})

const readSelectedProduct = selectedProduct => ({
  type: READ_SELECTED_PRODUCT,
  selectedProduct
})

const createProduct = product => ({
  type: CREATE_PRODUCT,
  product
})

const updateProduct = product => ({
  type: UPDATE_PRODUCT,
  product
})

const deleteProduct = productId => ({
  type: DELETE_PRODUCT,
  productId
})

/* DISPATCHER */
export const getAllProduct = () => dispatch => {
  axios.get('/api/product')
    .then(allProduct => dispatch(readAllProduct(allProduct.data)))
    .catch(err => console.error('Cannot load all product', err))
}

export const getSelectedProduct = productId => dispatch => {
  axios.get(`/api/product/${productId}`)
    .then(product => dispatch(readSelectedProduct(product)))
    .catch(err => console.error('Cannot load selected product', err))
}

export const addProduct = product => dispatch => {
  axios.post('/api/product', product)
    .then(newProduct => dispatch(createProduct(newProduct)))
    .catch(err => console.error('Cannot create product', err))
}

export const changeProduct = product => dispatch => {
  axios.put(`/api/product/${product.id}`, product)
    .then(updatedProduct => dispatch(updateProduct(updatedProduct)))
    .catch(err => console.error('Cannot update product', err))
}

export const removeProduct = productId => dispatch => {
  axios.delete(`/api/product/${productId}`)
    .then(() => dispatch(deleteProduct(productId)))
    .catch(err => console.error('Cannot delete product', err))
}
