import openModal from './open.png'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

import React from 'react'

function CardItens({ images, styles, likeImage }) {
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
                {image.like ? 
                  <AiFillHeart size={25} color="red" onClick={() => likeImage(image.id)} />
                  :
                  <AiOutlineHeart size={25} onClick={() => likeImage(image.id)} />
                }
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
