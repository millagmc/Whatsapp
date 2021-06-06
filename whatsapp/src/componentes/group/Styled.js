import styled from 'styled-components'

const GroupContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 6vh;
  border-bottom: solid 1px var(--cinza-claro);
`

const ImgGroup = styled.img`
  height: 70%;
  border-radius: 50%;
  margin-left: 2%;
`

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2%;
`

const Title = styled.h1`
  font-size: 0.8rem;
  font-weight: 500;
  color: white;
`

const Text = styled.p`
  font-size: 0.7rem;
  color: white;
`

export { GroupContainer, ImgGroup, TextGroup, Title, Text }