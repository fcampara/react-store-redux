import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { MdAddShoppingCart } from 'react-icons/md'
import api from '../../services/api'
import { formatPrice } from '../../util/format'
import { ProductList } from './styles'

import * as CartActions from '../../store/modules/cart/actions'

export default function Home() {
  const [products, setProducts] = useState([])
  const amount = useSelector((state) => state.cart.reduce((total, product) => {
    total[product.id] = product.amount
    return total
  }, {}))

  const dispatch = useDispatch()

  useEffect(() => {
    function loadProducts() {
      api.get('products').then(({ data }) => {
        const listProducts = data.map((product) => ({
          ...product,
          priceFormatted: formatPrice(product.price),
        }))

        setProducts(listProducts)
      })
    }

    loadProducts()
  }, [])

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id))
  }

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

              <button type="button" onClick={() => handleAddProduct(product.id)}>
                <div>
                  <MdAddShoppingCart size={16} color="#FFF" />
                  {amount[product.id] || 0}
                </div>
                <span> Adicionar ao carrinho </span>
              </button>
            </li>
          ))
      }
    </ProductList>
  )
}
