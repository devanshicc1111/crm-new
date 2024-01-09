import React from 'react'
import dynamic from 'next/dynamic'
import LinearProgress from '@mui/material/LinearProgress'
import Box from '@mui/material/Box'

import PersistLogin from 'src/components/PersistLogin'

// import Leads from 'src/components/leads/Leads'

const Leads = dynamic(() => import('../../components/leads/Leads'), {
  ssr: false,
  loading: () => (
    <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>
  )
})

const Index = () => {
  return (
    // <PersistLogin>
    //   <Leads />
    // </PersistLogin>

    <Leads />
  )
}

export default Index
