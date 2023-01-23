import {styled} from '../../theme'

const styledList = styled('ul', {
  listStyle: 'none',
  margin: 0,
  padding: 0,
})

export const styledListItem = styled('li', {flex: 1})

export const List = styledList
export const ListItem = styledListItem
