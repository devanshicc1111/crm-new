import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useLayoutEffect } from 'react'
import Link from 'next/link'
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'
import {
  authRefreshAction,
  checkTokenValidtyAction,
  refreshData,
  refreshError,
  refreshIsError,
  refreshIsLoading,
  refreshIsSuccess
} from '../redux/features/authSlice'

const PersistLogin = ({ children }) => {
  const token = sessionStorage.getItem('token')

  const dispatch = useDispatch()

  const data = useSelector(refreshData)
  const isLoading = useSelector(refreshIsLoading)
  const isError = useSelector(refreshIsError)
  const error = useSelector(refreshError)
  const isSuccess = useSelector(refreshIsSuccess)

  useEffect(() => {
    if (!token) {
      dispatch(authRefreshAction())
    } else {
      dispatch(checkTokenValidtyAction())
    }
  }, [token, dispatch])

  if (isLoading) {
    return (
      <Box sx={{ width: '100%', marginTop: '40px' }}>
        <LinearProgress />
      </Box>
    )
  } else if (isError) {
    return (
      <p className='errmsg'>
        {`${error.data ? error.data?.message : error} -`}
        <Link href='/login'>Please login again</Link>.
      </p>
    )
  } else if (isSuccess || token) {
    return children
  }

  // Default return statement
  return null
}

export default PersistLogin
