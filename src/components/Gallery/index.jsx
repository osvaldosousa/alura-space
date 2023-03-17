import styles from './gallery.module.scss'
import heartIcon from './favorito.png'
import openModal from './open.png'
import images from './images.json'

import React from 'react'
import Tags from '../Tags'

function Galery() {
  return (
    <section className={styles.gallery}>
      <h2>Navegue pela Galería</h2>
      <Tags/>
      <ul className={styles.gallery__cards}>
        {
          images.map(image => {
            return (
              <li key={image.id} className={styles.gallery__card}>
                <img 
                  className={styles.gallery__image}
                  src={image.imagem} 
                  alt={`imagem de ${image.titulo}`}
                />

                <p className={styles.gallery__description}>{image.titulo}</p>

                <div>
                  <p>{image.creditos}</p>
                  <span>
                    <img src={heartIcon} alt="icone coração para curtir imagem" />
                    <img src={openModal} alt="icone de abrir modal" />
                  </span>
                </div>
              </li>
            )
          })
        }
      </ul>
    </section>
  )
}

export default Galery
