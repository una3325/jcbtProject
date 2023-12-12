// Nav.js

import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Nav.css'

function Nav() {
  return (
    <div className="Nav">
      <div className="Title">
        <Link className="navbarMenu" to={'/'}>
          JCBT
        </Link>
      </div>
      <div className="navbar">
        <Link className="navbarMenu" to={'/about'}>
          문제 페이지
        </Link>
        <Link className="navbarMenu" to={'/LoginPage'}>
          로그인
        </Link>
        <Link className="navbarMenu" to={'/SignUp'}>
          회원가입
        </Link>
      </div>
    </div>
  )
}

export default Nav
