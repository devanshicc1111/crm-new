// ** MUI Imports
import List from '@mui/material/List'
import Avatar from '@mui/material/Avatar'
import ListItem from '@mui/material/ListItem'
import IconButton from '@mui/material/IconButton'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const QuotationList = () => {
  return (
    <List>
      <ListItem>
        <ListItemText primary='Caroline Black' secondary='Sweet dessert brownie.' />
        <ListItemSecondaryAction>
          <IconButton edge='end'>
            <Icon icon='tabler:eye' />
          </IconButton>
          <IconButton edge='end'>
            <Icon icon='tabler:download' />
          </IconButton>
          <IconButton edge='end'>
            <Icon icon='tabler:mail' />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem>
        <ListItemText primary='Alfred Copeland' secondary='Pudding pie tiramisu.' />
        <ListItemSecondaryAction>
          <IconButton edge='end'>
            <Icon icon='tabler:eye' />
          </IconButton>
          <IconButton edge='end'>
            <Icon icon='tabler:download' />
          </IconButton>
          <IconButton edge='end'>
            <Icon icon='tabler:mail' />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem>
        <ListItemText primary='Celia Schneider' secondary='Muffin pie chupa chups.' />
        <ListItemSecondaryAction>
          <IconButton edge='end'>
            <Icon icon='tabler:eye' />
          </IconButton>
          <IconButton edge='end'>
            <Icon icon='tabler:download' />
          </IconButton>
          <IconButton edge='end'>
            <Icon icon='tabler:mail' />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  )
}

export default QuotationList
