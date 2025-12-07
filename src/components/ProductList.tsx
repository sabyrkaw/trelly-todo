import { ProductItem } from './ProductItem.tsx'

export const ProductList = (props) => {
  return (
    <ul>
      {props.items.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  )
}