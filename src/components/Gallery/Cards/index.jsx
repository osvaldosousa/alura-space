import React from 'react'
import CardItens from '../CardItens'

function Cards({ images, styles, likeImage }) {
  return (
    <ul className={styles.gallery__cards}>
      <CardItens
        likeImage={likeImage}
        images={images}
        styles={styles}
      />
    </ul>
  )
}

export default Cards
