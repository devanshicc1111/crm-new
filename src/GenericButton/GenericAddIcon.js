import { Fab, Tooltip } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

function GenericAddIcon() {
  return (
    <div className='PaIconCon'>
      <Tooltip title='CREATE ACCOUNT'>
        <span>
          <Fab
            style={{
              width: '2.2rem',
              height: '.1rem',
              backgroundColor: '#7367F0'
            }}
          >
            <AddIcon style={{ fontSize: '19', color: '#fff' }} />
          </Fab>
        </span>
      </Tooltip>
    </div>
  )
}

export default GenericAddIcon
