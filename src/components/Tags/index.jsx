import styles from './tags.module.scss'

import React from 'react'

function Tags() {
  return (
    <div className={styles.tags}>
      <p>Filtrar Por:</p>
      <ul className={styles.tags__list}>
        <li>Estrelas</li>
        <li>Galáxias</li>
        <li>Luas</li>
        <li>Planetas</li>
      </ul>
    </div>
  )
}

export default Tags
