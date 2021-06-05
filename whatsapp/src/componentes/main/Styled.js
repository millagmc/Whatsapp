import styled from 'styled-components'
import background from '../../img/img.png';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  height: 90%;
  margin: 8px;
  background: url(${background});
`

const TextField = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10%;
  margin-bottom: 1%;
  padding: 1%;
  background-color: var(--cinza-claro);
`

const User = styled.h1`
  font-size: 0.7rem;
  color: pink;
`

const Text = styled.p`
  font-size: 0.8rem;
  color: white;
`

const MainInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 8%;
  background-color: var(--cinza-escuro);
`

const ButtonInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15%;
`

const Button = styled.button`
  width: 5.5vw;
  height: 3vh;
  border: none;
  border-radius: 5%;
`

const TextUserButton = styled.p`
  font-size: 0.8rem;
  color: #5a6367;
`

const Input = styled.input`
  height: 2.5vh;
  width: 50vw;
  border: none;
  background-color: var(--cinza-claro);
`

export { 
  MainContainer,
  MainInput,
  TextField,
  User,
  Text,
  ButtonInput,
  Button,
  TextUserButton,
  Input
}