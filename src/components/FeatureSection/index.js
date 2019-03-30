import React from 'react'
import classnames from 'classnames/bind'
import { StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Section } from '../index'

import styles from './styles.module.css'

const cx = classnames.bind(styles)

export default ({ children, reverse, secondary }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          right: file(relativePath: { eq: "phone-right.png" }) {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          left: file(relativePath: { eq: "phone-left.png" }) {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => {
        const image = data[reverse ? 'left' : 'right']

        return (
          <Section
            align="center"
            innerClassName={cx(styles.container, { [styles.reverse]: reverse, [styles.secondary]: secondary })}
          >
            {children}
            <div
              className={cx(styles.imageWrapper, { [styles.reverse]: reverse })}
            >
              <Img fluid={image.childImageSharp.fluid} fadeIn={false} />
            </div>
          </Section>
        )
      }}
    />
  )
}
