import React from 'react'
import dynamic from 'next/dynamic'
import LinearProgress from '@mui/material/LinearProgress'
import Box from '@mui/material/Box'
import Contact from './Contact'

const PersistLogin = dynamic(() => import('../../components/PersistLogin'), {
  ssr: false,
  loading: () => (
    <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>
  )
})

const Index = () => {
  return (
    <PersistLogin>
      <Contact />
    </PersistLogin>
  )
}

export default Index
