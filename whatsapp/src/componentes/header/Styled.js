import styled from 'styled-components'

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 5vh;
  background-color: var(--cinza-claro);
  justify-content: space-between;
`

const Perfil = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50vw;
`

const ImgPerfil = styled.img`
  height: 70%;
  border-radius: 50%;
  margin-left: 2%;
`

const TextPerfil = styled.p`
  color: white;
  margin-left: 1%;
`

const IconDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 50vw;
`

const Icon = styled.img`
  height: 50%;
  border-radius: 50%;
  margin-right: 2%;
`

export { HeaderContainer, Perfil, ImgPerfil, TextPerfil, IconDiv, Icon }