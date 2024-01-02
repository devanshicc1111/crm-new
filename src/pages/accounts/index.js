import React from 'react'
import Accounts from './Accounts'
import PersistLogin from 'src/components/PersistLogin'

const Index = () => {
  return (
    <PersistLogin>
      <Accounts />
    </PersistLogin>
  )
}

export default Index
