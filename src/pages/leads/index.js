import React from 'react'

import PersistLogin from 'src/components/PersistLogin'
import Leads from 'src/components/leads/Leads'

const Index = () => {
  return (
    <PersistLogin>
      <Leads />
    </PersistLogin>
  )
}

export default Index
