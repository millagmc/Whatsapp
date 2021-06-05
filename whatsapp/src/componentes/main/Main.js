import React from 'react'
import { 
  MainContainer,
  MainInput,
  TextField,
  User,
  Text,
  ButtonInput,
  Button,
  TextUserButton,
  Input
} from './Styled'

class Main extends React.Component {
  render() {
    return (
      <>
        <MainContainer>
          <TextField>
            <User>Lucas Gomes</User>
            <Text>texto de exemplo</Text>
          </TextField>
          <TextField>
            <User>João</User>
            <Text>texto de exemplo</Text>
          </TextField>
        </MainContainer>
        <MainInput>
          <ButtonInput>
            <Button>Usuário</Button>
            <TextUserButton>Selecione o Usuário</TextUserButton>
          </ButtonInput>
          <Input placeholder=' Digite uma mensagem'/>
        </MainInput>
      </>
    )
  }
}

export default Main