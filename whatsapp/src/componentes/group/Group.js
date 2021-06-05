import React from 'react'
import { GroupContainer, ImgGroup, TextGroup, Title, Text } from './Styled'

class Group extends React.Component {
  render() {
    return (      
      <GroupContainer>
        <ImgGroup src='https://avatars.githubusercontent.com/u/77408541?v=4'/>
        <TextGroup>
          <Title>Nome do Grupo</Title>
          <Text>Ultima mensagem</Text>
        </TextGroup>
      </GroupContainer>
    )
  }
}

export default Group