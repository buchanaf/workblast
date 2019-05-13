import React from 'react'
import classnames from 'classnames/bind'
import { Section, Input } from '../index'

import styles from './styles.module.css'

const cx = classnames.bind(styles)

export default () => {
  return (
    <Section outerClassName={styles.outer} innerClassName={styles.inner}>
      <h2 className={styles.title}>
        Contact Us
      </h2>
      <form className={styles.form} name="contact" method="POST" data-netlify="true">
        <div className={styles.row}>
          <label className={styles.label}>Name:</label>
          <Input type="text" name="name" required />
        </div>
        <div className={styles.row}>
          <label className={styles.label}>Email:</label>
          <Input type="email" name="email" required />
        </div>
        <div className={styles.row}>
          <label className={styles.label}>Telephone:</label>
          <Input type="tel" name="email" />
        </div>
        <div className={styles.row}>
          <label className={styles.label}>Message:</label>
          <textarea className={styles.textarea} name="message" />
        </div>
        <div className={cx(styles.row, styles.rowCenter)}>
          <button className={styles.button} type="submit">Send</button>
        </div>
      </form>
    </Section>
  )
}
