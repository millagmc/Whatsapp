import React from 'react'
import Group from '../group/Group'
import { Nav, Search, TextField, GroupField } from './Styled'

class Navigation extends React.Component {
  render() {
    return (
      <Nav>
        <Search>
          <TextField placeholder=' Pesquise' />
        </Search>
        <GroupField>
          <Group/>
          <Group/>
        </GroupField>
      </Nav>
    )
  }
}

export default Navigation