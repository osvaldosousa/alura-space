import React from 'react'

function Item({ images }) {
  return (
    <>
      {images.map(item => {
        return (
          <li key={item.id}>
            <img src={item.path} alt={item.alt} />
          </li>
        )
      })}
    </>
  )
}

export default Item
