import React from 'react'
import classnames from 'classnames/bind'

import styles from './styles.module.css'

const cx = classnames.bind(styles)

const Section = ({ children, align, outerClassName, innerClassName }) => {
  return (
    <section className={cx(styles.section, outerClassName)}>
      <div className={cx(styles.inner, styles[align], innerClassName)}>{children}</div>
    </section>
  )
}

Section.defaultProps = {
  align: 'left'
}

export default Section