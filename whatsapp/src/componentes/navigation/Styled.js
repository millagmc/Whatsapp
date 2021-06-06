import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: var(--cinza-escuro);
`

const Search = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 5vh;
  width: 100%;
  overflow: hidden;
`

const TextField = styled.input`
  background-color: var(--cinza-claro);
  height: 60%;
  width: 90%;
  border: 0;
`

const GroupField = styled.div`
  border-top: solid 1px var(--cinza-claro);
  background-color: var(--cinza-escuro);
  height: 100%;
`

export { Nav, Search, TextField, GroupField }