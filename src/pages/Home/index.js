import React from 'react'

import { MdAddShoppingCart } from 'react-icons/md'
import { ProductList } from './styles'

export default function Home() {
  return (
    <ProductList>
      {
        [...new Array(6)].map(() => (
          <li>
            <img
              src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-4-masculino/26/D12-9119-026/D12-9119-026_zoom1.jpg"
              alt="Tênis"
            />
            <strong>Tênis muito legal</strong>
            <span>R$ 129,90 </span>

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