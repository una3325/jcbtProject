import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/SignUpPage.css'

const SignUpPage = () => {
  const [name, setName] = useState('')
  const [id, setId] = useState('')
  const [pw, setPw] = useState('')
  const [confirmpw, setConfirmpw] = useState('')
  const [email, setEmail] = useState('')
  const [isRegistered, setIsRegistered] = useState(false)

  const navigate = useNavigate()

  const handleSignUp = async (event) => {
    event.preventDefault()

    if (pw !== confirmpw) {
      alert('비밀번호가 일치하지 않습니다. 다시 확인해주세요.')
      return
    }

    const userData = {
      name: name,
      id: id,
      pw: pw,
      confirmpw: confirmpw,
      email: email,
    }

    try {
      const response = await fetch('http://localhost:5000/api/users', {
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

      // 회원 가입 성공
      setIsRegistered(true)
      alert('회원가입 성공, 로그인 ㄱ')
      // 홈 화면으로 이동
      navigate('/LoginPage')
    } catch (error) {
      console.error('요청 실패:', error)

      alert('요청에 실패했습니다. 다시 시도해주세요.')
      window.location.reload()
    }
  }

  return (
    <div className="signup-container">
      <h2 className="signup-heading">회원가입</h2>
      <form onSubmit={handleSignUp}>
        <label htmlFor="name" className="signup-label">
          Name:
        </label>
        <input
          className="signup-input"
          placeholder="name"
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="username" className="signup-label">
          ID:
        </label>
        <input
          type="text"
          placeholder="id"
          id="username"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="signup-input"
        />

        <label htmlFor="pw" className="signup-label">
          pw:
        </label>
        <input
          placeholder="pw"
          type="password"
          id="pw"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          className="signup-input"
        />

        <label htmlFor="confirmpw" className="signup-label">
          Confirm pw:
        </label>
        <input
          placeholder=" Confirm pw"
          type="password"
          id="confirmpw"
          value={confirmpw}
          onChange={(e) => setConfirmpw(e.target.value)}
          className="signup-input"
        />

        <label htmlFor="email" className="signup-label">
          Email:
        </label>
        <input
          placeholder="email"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="signup-input"
        />

        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>

      <p className="signup-message">
        {isRegistered ? 'Sign Up successful! Please proceed to Login.' : ''}
      </p>
    </div>
  )
}
export default SignUpPage
