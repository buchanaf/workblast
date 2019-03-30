
import React from 'react'
import classnames from 'classnames/bind'

import styles from './styles.module.css'

const cx = classnames.bind(styles)

const FeaturedItem = ({ title, children, align }) => {
  return (
    <div className={cx(styles.item, align)}>
      <h3 className={styles.itemTitle}>{title}</h3>
      <p className={styles.itemDescription}>{children}</p>
    </div>
  )
}

export default FeaturedItem
