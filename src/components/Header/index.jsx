import logo from "./logo.png"
import search from "./search.png"

import styles from './header.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo alura space"/>
      <div className={styles.header__container}>
        <input 
          className={styles.header__input}
          type="texte" 
          placeholder="O que você procura?"
        />
        <img src={search} alt="icone de busca"/>
      </div>
    </header>
  )
}

export default Header