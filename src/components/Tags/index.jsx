import styles from './tags.module.scss'
import images from '../Gallery/images.json'

import React from 'react'

function Tags({ tags, filterImages, setItens }) {
  return (
    <div className={styles.tags}>
      <p>Filtrar Por:</p>
      <ul className={styles.tags__list}>
        {tags.map(tag => {
          return (
            <li key={tag} onClick={() => filterImages(tag)}>
              {tag}
            </li>
          )
        })}
        <li onClick={() => setItens(images)}>Todas</li>
      </ul>
    </div>
  )
}

export default Tags
