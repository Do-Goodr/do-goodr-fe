import React from 'react'

interface name {
  name: string
}

const Header: React.FC<name> = (name) => {
  return (
    <div>
      <h1>Header</h1>
    </div>
  )
}

export default Header