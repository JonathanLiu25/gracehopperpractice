import { connect } from 'react-redux'
import Product from '../components/Product'

const mapStateToProps = state => {
  return {
    allProduct: state.product.allProduct
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

const ProductContainer = connect(mapStateToProps, mapDispatchToProps)(Product)

export default ProductContainer
