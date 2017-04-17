import React from 'react'

const Product = props => {
  const allProduct = props.allProduct

  return (
    <div className="text-center">
      <ul className="list-unstyled">
        {allProduct && allProduct.map(product => (
          <li className="col-md-4" key={product.id}>
            <div className="col-md-4">
              <img className="all-products-image" src={product.image} />
              {product.name}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Product
