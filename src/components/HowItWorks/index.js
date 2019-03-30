import React from 'react'
import { Section } from '../index'

import styles from './styles.module.css'

export default () => {
  return (
    <Section align="center" outerClassName={styles.outer}>
      <h2 className={styles.title}>How it Works</h2>
      <p className={styles.subtitle}>
        WorkBlast is a powerful mobile app designed to supplement rather than
        replace your existing scheduling solution. It ensures that changes to
        the schedule and add-ons proceed in an efficient, hassle-free manner.
      </p>
    </Section>
  )
}
