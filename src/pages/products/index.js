import React from 'react'
import Products from './Products'
import PersistLogin from 'src/components/PersistLogin'

const Index = () => {
  return (
    <PersistLogin>
      <Products />
    </PersistLogin>
  )
}

export default Index
