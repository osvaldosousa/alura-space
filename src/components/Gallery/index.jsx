import styles from './gallery.module.scss'
import images from './images.json'

import React, { useState } from 'react'
import Tags from '../Tags'
import Cards from './Cards'

function Gallery() {
  const [itens, setItens] = useState(images)
  const tagsName = [...new Set(images.map(image => image.tag))]

  function filterImagesTags(tag = images) {
    const filteredImages = images.filter(image => {
      return image.tag === tag
    })

    setItens(filteredImages)
  }

  function likeImage(id) {
    setItens(images.map(image => {
      if (image.id === id) {
        image.like = !image.like
        
      }

      return image
    }))
  }

  return (
    <section className={styles.gallery}>
      <h2>Navegue pela Galería</h2>
      <Tags
        tags={tagsName}
        filterImages={filterImagesTags}
        setItens={setItens}
      />
      <Cards likeImage={likeImage} images={itens} styles={styles} />
    </section>
  )
}

export default Gallery
