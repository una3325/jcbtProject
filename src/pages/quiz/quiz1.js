import React from 'react'
import Exam1 from '../../utils/ExamData/exam1'
import '../../styles/quiz.css'

const Quiz1 = () => {
  return (
    <div className="quiz-page">
      <h1 className="quiz-title">정보처리기사 문제</h1>
      <Exam1 />
    </div>
  )
}

export default Quiz1
