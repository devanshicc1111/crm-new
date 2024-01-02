import React from 'react'
import Contact from './Contact'
import PersistLogin from 'src/components/PersistLogin'

const Index = () => {
  return (
    <PersistLogin>
      <Contact />
    </PersistLogin>
  )
}

export default Index
