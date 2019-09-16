import React from 'react'

import { MdAddShoppingCart } from 'react-icons/md'
import api from '../../services/api'
import { formatPrice } from '../../util/format'
import { ProductList } from './styles'

export default class Home extends React.Component {
  state = {
    products: []
  }

  async componentDidMount () {
    await api.get('products').then(({ data = [] }) => {

      const products = data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price)
      }))
      this.setState({ products })
    })
  }

  render() {
    const { products = [] } = this.state
    return (
      <ProductList>
        {
          products.map((product) => (
          <li key={product.id}>
            <img
              src={product.image}
              alt={product.title}
            />
            <strong>{product.title}</strong>
              <span>{product.priceFormatted}</span>

            <button type="button">
              <div>
                <MdAddShoppingCart size={16} color="#FFF" />
                3
              </div>
              <span> Adicionar ao carrinho </span>
            </button>
          </li>
        ))
      }
      </ProductList>
    )
  }
}
