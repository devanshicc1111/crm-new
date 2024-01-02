import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
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
  const dispatch = useDispatch()

  const data = useSelector(refreshData)
  const isLoading = useSelector(refreshIsLoading)
  const isError = useSelector(refreshIsError)
  const error = useSelector(refreshError)
  const isSuccess = useSelector(refreshIsSuccess)

  const checkTokenValidityData = useSelector(state => state.auth.checkTokenValidityData)
  const checkTokenValidityIsLoading = useSelector(state => state.auth.checkTokenValidityIsLoading)
  const checkTokenValidityIsError = useSelector(state => state.auth.checkTokenValidityIsError)
  const checkTokenValidityError = useSelector(state => state.auth.checkTokenValidityError)
  const checkTokenValidityIsSuccess = useSelector(state => state.auth.checkTokenValidityIsSuccess)

  useEffect(() => {
    const token = sessionStorage.getItem('token')
    if (!token) {
      dispatch(authRefreshAction())
    } else {
      dispatch(checkTokenValidtyAction())
    }
  }, [dispatch])

  if (isLoading || checkTokenValidityIsLoading) {
    return (
      <Box sx={{ width: '100%', marginTop: '40px' }}>
        <LinearProgress />
      </Box>
    )
  } else if (isError || checkTokenValidityIsError) {
    return (
      <p className='errmsg'>
        {`${isError ? error : checkTokenValidityError} -`}
        <Link href='/login'>Please login again</Link>.
      </p>
    )
  } else if (isSuccess || checkTokenValidityIsSuccess) {
    return children
  }

  // Default return statement
  return null
}

export default PersistLogin
