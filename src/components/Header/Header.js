import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="PageHeader">
      <Link className="Title" to={'/'}>
        JCBT
      </Link>
    </div>
  )
}

export default Header
