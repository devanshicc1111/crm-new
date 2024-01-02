import React from 'react'

import Leads from './Leads'
import PersistLogin from 'src/components/PersistLogin'

const Index = () => {
  return (
    <PersistLogin>
      <Leads />
    </PersistLogin>
  )
}

export default Index
