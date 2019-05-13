import React from 'react'
import classnames from 'classnames/bind'

import styles from './styles.module.css'

const cx = classnames.bind(styles)

export default ({ className, ...rest}) => {
  return <input className={cx(styles.input, className)} {...rest} />
}