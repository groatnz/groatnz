import React from 'react'
import styled from 'styled-components'
import { Link } from '../lib/components'

const FooterEl = styled.footer`
    width: 90%;
    max-width: 640px;
    margin: 0 auto;
    text-align: center;
`

const Hr = styled.hr`
    margin: 60px auto 0;
`

const FooterText = styled.div`
    margin: 30px auto;
`

const Footer = () => (
  <FooterEl>
    <Hr />
    <FooterText>
      This site built with NextJS, React, Markdown and Github Pages. <br />
      {'groat.nz work can be found at '}
      <Link href='https://github.com/groatnz'>Github</Link>

    </FooterText>
  </FooterEl>
)

export default Footer
