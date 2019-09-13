import React from 'react'

// import
import { Container, ProductTable, Total } from './styles'

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>Produto</th>
            <th>Qtd</th>
            <th>Subtotal</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-4-masculino/26/D12-9119-026/D12-9119-026_zoom1.jpg"
                alt="Tênis"
              />
            </td>
            <td>
              <strong> Tênis massa </strong>
              <span>R$ 129,90</span>
            </td>
            <td />
          </tr>
        </tbody>
        <footer>
          <button type="button">Finalizar pedido</button>
        </footer>
      </ProductTable>
      <Total>
        <span>Total</span>
        <strong>R$ 1220,90</strong>
      </Total>
    </Container>
  )
}
