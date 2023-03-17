import styles from './popularity.module.scss'
import images from './images-popularity.json'

import React from 'react'
import Item from './Item'

function Popularity() {
  return (
    <aside className={styles.popularity}>
      <h2>Populares</h2>
      <ul className={styles.popularity__images}>
        <Item
          images={images}
        />
      </ul>
      <button>Ver Mais</button>
    </aside>
  )
}

export default Popularity
