import facebookIcon from 'assets/social/facebook.svg'
import instagramIcon from 'assets/social/instagram.svg'
import twitterIcon from 'assets/social/twitter.svg'

import styles from './footer.module.scss'

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.footer__social}>
        <li>
          <a href='#' target={'_blank'}>
            <img src={facebookIcon} alt='icon da rede social Facebook'/>
          </a>
        </li>
        <li>
          <a href='#' target={'_blank'}>
            <img src={instagramIcon} alt='icon da rede social instagram'/>
          </a>
        </li>
        <li>
          <a href='#' target={'_blank'}>
            <img src={twitterIcon} alt='icon da rede social twitter'/>
          </a>
        </li>
      </ul>

      <p> Desenvolvido por Osvaldo Sousa.</p>
    </footer>
  )
}

export default Footer
