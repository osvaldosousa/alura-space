import home from 'assets/icons/home-ativo.png'
import maisCurtidas from 'assets/icons/mais-curtidas-inativo.png'
import maisVistas from 'assets/icons/mais-vistas-inativo.png'
import maisNovas from 'assets/icons/novas-inativo.png'
import surpreendame from 'assets/icons/surpreenda-me-inativo.png'

import styles from './menu.module.scss'

function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__list}>
        <li className={styles.menu__item}>
          <img src={home} alt="icone casa" />
          <a href="#" >Inicio</a>
        </li>
        <li className={styles.menu__item}>
          <img src={maisCurtidas} alt="icone " />
          <a href="#" >Mais Curtida</a>
        </li>
        <li className={styles.menu__item}>
          <img src={maisVistas} alt="icone " />
          <a href="#" >Mais Visualizadas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={maisNovas} alt="icone " />
          <a href="#" >Mais Novas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={surpreendame} alt="icone " />
          <a href="#" >Surpeendra-me</a>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
