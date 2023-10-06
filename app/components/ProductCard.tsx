interface Props {
    name: string,
}
import styles from "./ProductCard.module.css"
const ProductCard = ({name}: Props) => {
  return (
    <div className={styles.card + " bg-red-50"}>{name}</div>
  )
}

export default ProductCard