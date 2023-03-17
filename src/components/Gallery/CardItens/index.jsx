import heartIcon from './favorito.png'
import openModal from './open.png'

import React from 'react'

function CardItens({images, styles}) {
  return (
    <>
      {images.map(image => {
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
      })}
    </>
  )
}

export default CardItens
