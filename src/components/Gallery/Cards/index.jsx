import React from 'react'
import CardItens from '../CardItens'

function Cards({ images, styles }) {
  return (
    <ul className={styles.gallery__cards}>
      <CardItens
        images={images}
        styles={styles}
      />
    </ul>
  )
}

export default Cards
