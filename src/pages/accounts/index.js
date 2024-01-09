import React from 'react'
import PersistLogin from 'src/components/PersistLogin'
import Accounts from 'src/components/accounts/Accounts'

const Index = () => {
  return (
    <PersistLogin>
      <Accounts />
    </PersistLogin>
  )
}

export default Index
