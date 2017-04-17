import { connect } from 'react-redux'
import Navbar from '../components/Navbar'

const mapStateToProps = state => ({
  allProduct: state.product.allProduct
})

const mapDispatchToProps = dispatch => ({})

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar)

export default NavbarContainer
