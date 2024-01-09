import React from 'react'
import PersistLogin from 'src/components/PersistLogin'
import Products from 'src/components/products/Products'

const Index = () => {
  return (
    <PersistLogin>
      <Products />
    </PersistLogin>
  )
}

export default Index
