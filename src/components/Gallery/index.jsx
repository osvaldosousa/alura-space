import styles from './gallery.module.scss'
import images from './images.json'

import React from 'react'
import Tags from '../Tags'
import Cards from './Cards'

function Gallery() {
  return (
    <section className={styles.gallery}>
      <h2>Navegue pela Galería</h2>
      <Tags/>
      <Cards 
        images={images}
        styles={styles}
      />
    </section>
  )
}

export default Gallery
