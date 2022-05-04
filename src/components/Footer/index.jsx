import React from 'react'
import { AiFillTwitterCircle, AiFillInstagram, AiFillGithub } from 'react-icons/ai'

import { FooterContainer, SectionIcons, Icon, SectionBy, By } from './styles.js'

export const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <SectionIcons>
          <Icon href='https://github.com/edex-13' target='_blank'>
            <AiFillGithub size={25} />
          </Icon>
          <Icon href='https://www.instagram.com/edex_13/' target='_blank'>
            <AiFillInstagram size={25} />
          </Icon>
          <Icon href='https://twitter.com/Edex_13' target='_blank'>
            <AiFillTwitterCircle size={25} />
          </Icon>
        </SectionIcons>
        <SectionBy>
          <p>❮❯ by </p>
          <By href='https://github.com/edex-13' target='_blank'> Ederson Lopez </By>
          <p>2022</p>
        </SectionBy>
      </div>
    </FooterContainer>
  )
}
