import React from 'react'
import PersistLogin from 'src/components/PersistLogin'
import Deals from 'src/components/deals/Deals'

const Index = () => {
  return (
    <PersistLogin>
      <Deals />
    </PersistLogin>
  )
}

export default Index
