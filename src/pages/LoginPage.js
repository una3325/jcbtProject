import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/LoginPage.css'

const LoginPage = () => {
  const [id, setId] = useState('')
  const [pw, setPw] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const navigate = useNavigate()

  const handleLogin = async (event) => {
    event.preventDefault()

    const userData = {
      id: id,
      pw: pw,
    }

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify(userData),
      })

      if (!response.ok) {
        throw new Error('서버 응답이 정상적이지 않습니다.')
      }

      // 로그인 성공

      const responseData = await response.json()

      setIsAuthenticated(true)
      alert('로그인 성공! 환영합니다, ' + responseData.name)
      navigate('/')
    } catch (error) {
      console.error('요청 실패:', error)
      alert('로그인에 실패했습니다. 다시 시도해주세요.')
      //window.location.reload()
    }
  }

  return (
    <div className="login-container">
      <h2 className="login-heading">로그인</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="username" className="login-label">
          id:
        </label>
        <input
          type="text"
          id="username"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="login-input"
          required
          placeholder="id"
        />

        <label htmlFor="pw" className="login-label">
          Password:
        </label>
        <input
          type="password"
          id="pw"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          className="login-input"
          required
          placeholder="pw"
        />

        <button type="submit" className="login-button">
          Login
        </button>
      </form>

      <p className="login-message">
        {isAuthenticated ? 'Login successful! Welcome back.' : ''}
      </p>
    </div>
  )
}

export default LoginPage
