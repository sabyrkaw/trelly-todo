import { useState } from 'react'

export const ProductItem = (props) => {
  const [inCart, setInCart] = useState(false)

  return (
    <li>
      <p>id: {props.product.id}</p>
      <p>name: {props.product.name}</p>
      <p>price: {props.product.price}</p>
      <p>category: {props.product.category}</p>

      <button
        type="button"
        onClick={() => {
          if (!inCart) {
            setInCart(true)
            alert('Товар добавлен в корзину')
          } else {
            setInCart(false)
            alert('Товар удален из корзины')
          }
        }}
        style={{
          color: 'black',
          backgroundColor: inCart ? 'orange' : 'white'
        }}
      >
        {inCart ? 'Товар в корзине' : 'Добавить в корзину'}
      </button>
    </li>
  )
}