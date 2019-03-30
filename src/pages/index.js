import React from 'react'
import {
  Header,
  HowItWorks,
  SEO,
  FeatureSection,
  FeaturedItem,
} from '../components'

const IndexPage = () => (
  <React.Fragment>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Header />
    <HowItWorks />
    <FeatureSection>
      <FeaturedItem title="Create Pools" align="right">
        Easily create shift trading pools by department, position, or skill set.
      </FeaturedItem>
    </FeatureSection>
    <FeatureSection reverse>
      <FeaturedItem
        title="Send Blasts"
        align="left"
      >
        One button offers up a shift to everyone. The first person to claim it,
        gets it!
      </FeaturedItem>
    </FeatureSection>
    <FeatureSection >
      <FeaturedItem title="Quotas" align="right">
        Managers can request multiple workers for a single shift, and the offer
        will remain open until all slots are filled.
      </FeaturedItem>
    </FeatureSection>
    <FeatureSection reverse>
      <FeaturedItem
        title="Managers Have Control"
        align="left"
      >
        Managers decide who is allowed to offer shifts, and they can approve or
        reject trades between workers.
      </FeaturedItem>
    </FeatureSection>
  </React.Fragment>
)

export default IndexPage
