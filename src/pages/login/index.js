// ** React Imports
import { useEffect, useState } from 'react'
import styles from './login.module.css'

// ** Next Imports
import Link from 'next/link'

// ** MUI Components
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled, useTheme } from '@mui/material/styles'
import InputAdornment from '@mui/material/InputAdornment'
import MuiFormControlLabel from '@mui/material/FormControlLabel'
import { Card, CardContent, CardHeader } from '@mui/material'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// import clorosLogo from '../../assets/claros-3.png'

// ** Third Party Imports
import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// ** Hooks
import useBgColor from 'src/@core/hooks/useBgColor'
import { useSettings } from 'src/@core/hooks/useSettings'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import FooterIllustrationsV2 from 'src/views/pages/auth/FooterIllustrationsV2'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import {
  loginAction,
  loginData,
  loginError,
  loginIsError,
  loginIsLoading,
  loginIsSuccess,
  resetCheckTokenValidtyAction,
  resetLoginAction,
  resetRefreshction
} from 'src/redux/features/authSlice'
import Image from 'next/image'
import { getUserDetailsAction, resetgetUserDetailsAction } from 'src/redux/features/userSlice'

// ** Styled Components
const LoginIllustration = styled('img')(({ theme }) => ({
  zIndex: 2,
  maxHeight: 680,
  marginTop: theme.spacing(12),
  marginBottom: theme.spacing(12),
  [theme.breakpoints.down(1540)]: {
    maxHeight: 550
  },
  [theme.breakpoints.down('lg')]: {
    maxHeight: 500
  }
}))

const RightWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('md')]: {
    maxWidth: 450
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: 600
  },
  [theme.breakpoints.up('xl')]: {
    maxWidth: 750
  }
}))

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: `${theme.palette.primary.main} !important`
}))

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    color: theme.palette.text.secondary
  }
}))

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(5).required()
})

const defaultValues = {
  password: 'admin',
  email: 'mailto:admin@vuexy.com'
}

const HeaderTitle = styled(Typography)({
  fontWeight: 700,
  lineHeight: '40px',
  transition: 'opacity .25s ease-in-out, margin .25s ease-in-out'
})

const LoginPage = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [rememberMe, setRememberMe] = useState(true)
  const [showPassword, setShowPassword] = useState(false)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // ** Hooks
  const theme = useTheme()
  const bgColors = useBgColor()
  const { settings } = useSettings()
  const hidden = useMediaQuery(theme.breakpoints.down('md'))

  // ** Vars
  const { skin } = settings

  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  const data = useSelector(loginData)
  const isLoading = useSelector(loginIsLoading)
  const isError = useSelector(loginIsError)
  const error = useSelector(loginError)
  const isSuccess = useSelector(loginIsSuccess)

  const userData = useSelector(state => state.user.userData)
  const userDataIsLoading = useSelector(state => state.user.userDataIsLoading)
  const userDataIsError = useSelector(state => state.user.userDataIsError)
  const userDataError = useSelector(state => state.user.userDataError)
  const userDataIsSuccess = useSelector(state => state.user.userDataIsSuccess)

  useEffect(() => {
    sessionStorage.clear()
    dispatch(resetRefreshction())
    dispatch(resetCheckTokenValidtyAction())
    dispatch(resetgetUserDetailsAction())
  }, [])

  useEffect(() => {
    if (isSuccess) {
      sessionStorage.setItem('token', data?.access_token)
      sessionStorage.setItem('sessionId', data?.session_state)
      sessionStorage.setItem('username', username)
      sessionStorage.setItem('refresh_token', data.refresh_token)
      dispatch(resetLoginAction())
      dispatch(getUserDetailsAction())
    } else if (isError) {
      // console.log(error)
      alert(error)
      dispatch(resetLoginAction())
    }
    if (userDataIsSuccess) {
      // console.log('userData', userData)
      sessionStorage.setItem('userData', JSON.stringify(userData))
      dispatch(resetgetUserDetailsAction())
      router.push('/accounts')
    } else if (userDataIsError) {
      alert(userDataError)
      dispatch(resetgetUserDetailsAction())
    }
  }, [dispatch, isSuccess, isError, userDataIsError, userDataIsSuccess])

  const onSubmit = e => {
    e.preventDefault()
    dispatch(loginAction({ username, password }))
  }

  const imageSource = skin === 'bordered' ? 'auth-v2-login-illustration-bordered' : 'auth-v2-login-illustration'

  return (
    <Box className='content-right' sx={{ backgroundColor: 'background.paper' }}>
      {!hidden ? (
        <Box
          sx={{
            flex: 1,

            // display: 'flex',
            // position: 'relative',
            // alignItems: 'center',
            borderRadius: '20px',

            // justifyContent: 'center',

            backgroundColor: 'customColors.bodyBg',
            margin: theme => theme.spacing(8, 0, 8, 8)
          }}
        >
          <Card
            className={styles.SidebarParent}
            style={{ width: '95%', margin: 'auto', height: '40vh', marginTop: '1.2rem', overflowY: 'auto' }}
          >
            <CardContent style={{ paddingBottom: 0, marginBottom: 0 }}>
              <h3 style={{ color: '#7367f0' }}> Key Messages </h3>
            </CardContent>
            <CardContent>
              <Typography>
                All the best for your new project. Please make sure to read our Template Documentation to understand
                where to go from here and how to use our template. All the best for your new project. Please make sure
                to read our Template Documentation to understand where to go from here and how to use our template. All
                the best for your new project. Please make sure to read our Template Documentation to understand where
                to go from here and how to use our template. All the best for your new project. Please make sure to read
                our Template Documentation to understand where to go from here and how to use our template. All the best
                for your new project. Please make sure to read our Template Documentation to understand where to go from
                here and how to use our template. All the best for your new project. Please make sure to read our
                Template Documentation to understand where to go from here and how to use our template.
              </Typography>
            </CardContent>
          </Card>
          <Card
            className={styles.SidebarParent}
            style={{ width: '95%', margin: 'auto', height: '40vh', marginTop: '1.2rem', overflowY: 'auto' }}
          >
            <CardContent style={{ paddingBottom: 0, marginBottom: 0 }}>
              <h3 style={{ color: '#7367f0' }}> Hot News </h3>
            </CardContent>
            <CardContent>
              <Typography>
                All the best for your new project. Please make sure to read our Template Documentation to understand
                where to go from here and how to use our template. All the best for your new project. Please make sure
                to read our Template Documentation to understand where to go from here and how to use our template. All
                the best for your new project. Please make sure to read our Template Documentation to understand where
                to go from here and how to use our template. All the best for your new project. Please make sure to read
                our Template Documentation to understand where to go from here and how to use our template. All the best
                for your new project. Please make sure to read our Template Documentation to understand where to go from
                here and how to use our template. All the best for your new project. Please make sure to read our
                Template Documentation to understand where to go from here and how to use our template. All the best for
                your new project. Please make sure to read our Template Documentation to understand where to go from
                here and how to use our template. All the best for your new project. Please make sure to read our
                Template Documentation to understand where to go from here and how to use our template. All the best for
                your new project. Please make sure to read our Template Documentation to understand where to go from
                here and how to use our template.
              </Typography>
            </CardContent>
          </Card>

          <FooterIllustrationsV2 />
        </Box>
      ) : null}
      <RightWrapper>
        <Box
          sx={{
            p: [6, 12],
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Box sx={{ width: '100%', maxWidth: 400 }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {/* <div>
                <Image src={clorosLogo} alt='claros-logo' width={70} height={70} />
              </div> */}
              <div>
                <HeaderTitle style={{ fontSize: '2.5rem' }}>laros</HeaderTitle>
              </div>
            </div>
            <Box sx={{ my: 6 }}>
              <Typography variant='h3' sx={{ mb: 1.5 }}>
                {`Welcome to Claros 👋🏻`}
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>Please sign-in to your account</Typography>
            </Box>
            <form autoComplete='off' onSubmit={onSubmit}>
              <Box sx={{ mb: 4 }}>
                <CustomTextField
                  fullWidth
                  autoFocus
                  required
                  label='Username'
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  placeholder='enter username'
                />
              </Box>
              <Box sx={{ mb: 1.5 }}>
                <CustomTextField
                  fullWidth
                  value={password}
                  label='Password'
                  placeholder='enter password'
                  onChange={e => setPassword(e.target.value)}
                  type={showPassword ? 'text' : 'password'}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton
                          edge='end'
                          onMouseDown={e => e.preventDefault()}
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          <Icon fontSize='1.25rem' icon={showPassword ? 'tabler:eye' : 'tabler:eye-off'} />
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
              </Box>
              <Button
                fullWidth
                type='submit'
                variant='contained'
                sx={{ mb: 4 }}
                disabled={isLoading || userDataIsLoading}
              >
                {isLoading || userDataIsLoading ? 'Loading...' : 'Login'}
              </Button>
            </form>
          </Box>
        </Box>
      </RightWrapper>
    </Box>
  )
}

LoginPage.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default LoginPage
