import React from 'react'
import { Section } from '../index'
import AppleDownload from '../../assets/images/apple.svg'
import GoogleDownload from '../../assets/images/google-play.png'

import styles from './styles.module.css'

export default () => {
  return (
    <header className={styles.header}>
      <Section
        align="center"
        outerClassName={styles.outer}
        innerClassName={styles.inner}
      >
        <h1 className={styles.title}>Shift Trading</h1>
        <h2 className={styles.subtitle}>
          Takes all the hassle out of offering and picking up shifts.
        </h2>
        <div className={styles.downloads}>
          <a
            className={styles.link}
            href="https://play.google.com/store/apps/details?id=com.getworkblast.android.app&hl=en&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
          >
            <img
              className={styles.image}
              alt="Get it on Google Play"
              src={GoogleDownload}
            />
          </a>
          <a
            className={styles.link}
            href="https://play.google.com/store/apps/details?id=com.getworkblast.android.app&hl=en&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
          >
            <img alt="Get it on Apple Store" src={AppleDownload} />
          </a>
        </div>
      </Section>
    </header>
  )
}
