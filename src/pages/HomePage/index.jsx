import styles from './homepage.module.scss'
import banner from './banner.png'

import Header from "../../components/Header"
import Menu from "../../components/Menu"

function HomePage() {
  return (
    <>
      <Header/>
      <main>
        <section className={styles.homepage}>
          <Menu/>
          <div className={styles.homepage__imagem}>
            <h1>A galeria mais completa do espaço</h1>
            <img src={banner} alt="foto espacial da terra" />
          </div>
        </section>
      </main>
    </>
  )
}

export default HomePage