import React from 'react'
import { HeaderContainer, Perfil, ImgPerfil, TextPerfil, IconDiv, Icon } from './Styled'

class Header extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <Perfil>
          <ImgPerfil src='https://avatars.githubusercontent.com/u/66390420?v=4'/>
          <TextPerfil>Lucas Gomes</TextPerfil>
        </Perfil>
        <IconDiv>
          <Icon src='https://i.imgur.com/FDE2Rnv.png'/>
          <Icon src='https://i.imgur.com/FDE2Rnv.png'/>
          <Icon src='https://i.imgur.com/FDE2Rnv.png'/>
        </IconDiv>
      </HeaderContainer>
    )
  }
}

export default Header