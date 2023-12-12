import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/About.css'

function About() {
  return (
    <div>
      <h1>자격증 기출문제</h1>
      <h2>자격증 선택</h2>
      <ul>
        <li>
          <Link className="quiz-link" to="/quiz1">
            정보처리기사
          </Link>
        </li>
        <li>
          <Link className="quiz-link" to="/quiz2">
            정보보안기사
          </Link>
        </li>
        <li>
          <Link className="quiz-link" to="/quiz3">
            네트워크관리사 1급
          </Link>
        </li>
        <li>
          <Link className="quiz-link" to="/quiz4">
            네트워크관리사 2급
          </Link>
        </li>
        <li>
          <Link className="quiz-link" to="/quiz5">
            리눅스마스터
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default About
