import React from 'react'
import styles from './styles.module.css'

export default () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.column}>
          <h3 className={styles.subtitle}>Contact</h3>
          <ul className={styles.list}>
            <li>
              <a className={styles.link} href="mailto:support@getworkblast.com">
                support@getworkblast.com
              </a>
            </li>
            <li>
              <a className={styles.link} href="tel:1-303-900-2794">303-900-2794</a>
            </li>
          </ul>
        </div>
        <p className={styles.copy}>Copyright © 2019 WorkBLAST Inc</p>
      </div>
    </footer>
  )
}
