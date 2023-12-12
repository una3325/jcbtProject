// 정보처리기사
import React, { useState } from 'react'
import '../../styles/exam.css'

const Exam1 = () => {
  const questions1 = [
    {
      question:
        '1. 명백한 역할을 가지고 독립적으로 존재할 수 있는 시스템의 부분으로 넓은 의미에서는 재사용되는 모든 단위라고 볼 수 있으며, 인터페이스를 통해서만 접근할 수 있는 것은?',
      options: [
        { text: '1. Model', isCorrect: false },
        { text: '2. Sheet', isCorrect: false },
        { text: '3. Component', isCorrect: true },
        { text: '4. Cell', isCorrect: false },
      ],
      score: 5,
    },
    {
      question:
        '2. 메시지 지향 미들웨어(Message-Oriented Middleware, MOM)에 대한 설명으로 틀린 것은?',
      options: [
        {
          text: '1. 느리고 안정적인 응답보다는 즉각적인 응답이 필요한 온라인 업무에 적합하다.',
          isCorrect: true,
        },
        {
          text: '2. 독립적인 애플리케이션을 하나의 통합된 시스템으로 묶기 위한 역할을 한다.',
          isCorrect: false,
        },
        {
          text: '3. 송신측과 수신측의 연결 시 메시지 큐를 활용하는 방법이 있다.',
          isCorrect: false,
        },
        {
          text: '4. 상이한 애플리케이션 간 통신을 비동기 방식으로 지원한다',
          isCorrect: false,
        },
      ],
      score: 5,
    },
    {
      question:
        '3. 정보공학 방법론에서 데이터베이스 설계의 표현으로 사용하는 모델링 언어는?',
      options: [
        { text: '1. Package Diagram', isCorrect: false },
        { text: '2. State Transition Diagram', isCorrect: false },
        { text: '3. Deployment Diagram', isCorrect: false },
        { text: '4. Entity-Relationship Diagram', isCorrect: true },
      ],
      score: 5,
    },
    {
      question:
        '4. GoF(Gang of Four) 디자인 패턴을 생성, 구조, 행동 패턴의 세 그룹으로 분류할 때, 구조 패턴이 아닌 것은?',
      options: [
        { text: '1. Adapter 패턴', isCorrect: false },
        { text: '2. Bridge 패턴', isCorrect: false },
        { text: '3. Builder 패턴', isCorrect: true },
        { text: '4. Proxy 패턴', isCorrect: false },
      ],
      score: 5,
    },
    {
      question: '5. 알고리즘과 관련한 설명으로 틀린 것은?',
      options: [
        {
          text: '1. 주어진 작업을 수행하는 컴퓨터 명령어를 순서대로 나열한 것으로 볼 수 있다.',
          isCorrect: false,
        },
        {
          text: '2. 검색(Searching)은 정렬이 되지 않은 데이터 혹은 정렬이 된 데이터 중에서 키값에 해당되는 데이터를 찾는 알고리즘이다.',
          isCorrect: false,
        },
        {
          text: '3. 정렬(Sorting)은 흩어져있는 데이터를 키값을 이용하여 순서대로 열거하는 알고리즘이다.',
          isCorrect: false,
        },
        {
          text: '4. 선형 검색은 검색을 수행하기 전에 반드시 데이터의 집합이 정렬되어 있어야 한다.',
          isCorrect: true,
        },
      ],
      score: 5,
    },
    {
      question:
        '6. IDE(Integrated Development Environment) 도구의 각 기능에 대한 설명으로 틀린 것은?',
      options: [
        {
          text: '1. Coding - 프로그래밍 언어를 가지고 컴퓨터 프로그램을 작성할 수 있는 환경을 제공',
          isCorrect: false,
        },
        {
          text: '2. Compile - 저급언어의 프로그램을 고급언어 프로그램으로 변환하는 기능',
          isCorrect: true,
        },
        {
          text: '3. Debugging - 프로그램에서 발견되는 버그를 찾아 수정할 수 있는 기능',
          isCorrect: false,
        },
        {
          text: '4. Deployment - 소프트웨어를 최종 사용자에게 전달하기 위한 기능',
          isCorrect: false,
        },
      ],
      score: 5,
    },
    {
      question:
        '7. 인터페이스 구현 시 사용하는 기술로 속성-값 쌍(Attribute-Value Pairs)으로 이루어진 데이터 오브젝트를 전달하기 위해 사용하는 개방형 표준 포맷은?',
      options: [
        { text: '1. JSON', isCorrect: true },
        { text: '2. HTML', isCorrect: false },
        { text: '3. 2DOF', isCorrect: false },
        { text: '4. AVPN', isCorrect: false },
      ],
      score: 5,
    },
    {
      question:
        '8. SQL의 기능에 따른 분류 중에서 REVOKE문과 같이 데이터의 사용 권한을 관리하는데 사용하는 언어는?',
      options: [
        { text: '1. DDL(Data Definition Language)', isCorrect: false },
        { text: '2. DCL(Data Control Language)4', isCorrect: true },
        { text: '3. DUL(Data User Language)', isCorrect: false },
        { text: '4. DML(Data Manipulation Language)', isCorrect: false },
      ],
      score: 5,
    },
    {
      question:
        '9. 키의 종류 중 유일성과 최소성을 만족하는 속성 또는 속성들의 집합은?',
      options: [
        { text: '1. Atomic key	', isCorrect: false },
        { text: '2. Super key', isCorrect: false },
        { text: '3. Candidate key', isCorrect: true },
        { text: '4. Test key', isCorrect: false },
      ],
      score: 5,
    },
    {
      question:
        '10. IP 프로토콜에서 사용하는 필드와 해당 필드에 대한 설명으로 틀린 것은?',
      options: [
        {
          text: '1. Header Length는 IP 프로토콜의 헤더 길이를 32비트 워드 단위로 표시한다.',
          isCorrect: false,
        },
        {
          text: '2. Packet Length는 IP 헤더를 제외한 패킷 전체의 길이를 나타내며 최대 크기는 2^32－1비트이다.',
          isCorrect: true,
        },
        {
          text: '3. Time To Live는 송신 호스트가 패킷을 전송하기 전 네트워크에서 생존할 수 있는 시간을 지정한 것이다.',
          isCorrect: false,
        },
        {
          text: '4. Version Number는 IP 프로토콜의 버전번호를 나타낸다.',
          isCorrect: false,
        },
      ],
      score: 5,
    },
    {
      question:
        '11. Python 데이터 타입 중 시퀀스(Sequence) 데이터 타입에 해당하며 다양한 데이터 타입들을 주어진 순서에 따라 저장할 수 있으나 저장된 내용을 변경할 수 없는 것은?',
      options: [
        { text: '1. 복소수(complex) 타입', isCorrect: false },
        { text: '2. 리스트(list) 타입', isCorrect: false },
        { text: '3. 사전(dict) 타입', isCorrect: false },
        { text: '4. 튜플(tuple) 타입', isCorrect: true },
      ],
      score: 5,
    },
    {
      question:
        '12. 순서가 A, B, C, D로 정해진 입력자료를 push, push, pop, push, push, pop, pop, pop 순서로 스택연산을 수행하는 경우 출력 결과는?',
      options: [
        { text: '1. B D C A	', isCorrect: true },
        { text: '2. A B C D', isCorrect: false },
        { text: '3. B A C D', isCorrect: false },
        { text: '4. A B D C', isCorrect: false },
      ],
      score: 5,
    },
    {
      question:
        '13. 데이터베이스 설계 단계 중 물리적 설계 시 고려 사항으로 적절하지 않은 것은?',
      options: [
        { text: '1. 스키마의 평가 및 정제 ', isCorrect: true },
        { text: '2. 응답 시간', isCorrect: false },
        { text: '3. 저장 공간의 효율화 ', isCorrect: false },
        { text: '4. 트랜잭션 처리량', isCorrect: false },
      ],
      score: 5,
    },
    {
      question:
        '14. 관계해석에서 모든 것에 대하여의 의미를 나타내는 논리 기호는?',
      options: [
        { text: '1. ∃', isCorrect: false },
        { text: '2. ∈', isCorrect: false },
        { text: '3. ∀', isCorrect: true },
        { text: '4. ⊂', isCorrect: false },
      ],
      score: 5,
    },
    {
      question:
        '15. 정규화 과정에서 함수 종속이 A→B 이고 B→C 일 때 A→C인 관계를 제거하는 단계는?',
      options: [
        { text: '1. 1NF → 2NF', isCorrect: false },
        { text: '2. 2NF → 3NF', isCorrect: true },
        { text: '3. 3NF → BCNF', isCorrect: false },
        { text: '4. BCNF → 4NF', isCorrect: false },
      ],
      score: 5,
    },
    {
      question: '16. JAVA의 예외(exception)와 관련한 설명으로 틀린 것은?',
      options: [
        { text: '1. 문법 오류로 인해 발생한 것', isCorrect: true },
        {
          text: '2. 오동작이나 결과에 악영향을 미칠 수 있는 실행 시간 동안에 발생한 오류',
          isCorrect: false,
        },
        {
          text: '3. 배열의 인덱스가 그 범위를 넘어서는 경우 발생하는 오류',
          isCorrect: false,
        },
        {
          text: '4. 존재하지 않는 파일을 읽으려고 하는 경우에 발생하는 오류',
          isCorrect: false,
        },
      ],
      score: 5,
    },
    {
      question:
        '17. TCP/IP 계층 구조에서 IP의 동작 과정에서의 전송 오류가 발생하는 경우에 대비해 오류 정보를 전송하는 목적으로 사용하는 프로토콜은?',
      options: [
        { text: '1. ECP(Error Checking Protocol)', isCorrect: false },
        { text: '2. ARP(Address Resolution Protocol)', isCorrect: false },
        { text: '3. ICMP(Internet Control Message Protocol)', isCorrect: true },
        { text: '4. PPP(Point-to-Point Protocol)', isCorrect: false },
      ],
      score: 5,
    },
    {
      question: '18. 객체지향 분석 기법과 관련한 설명으로 틀린것은?',
      options: [
        { text: '1. 동적 모델링 기법이 사용될 수 있다.', isCorrect: false },
        {
          text: '2. 기능 중심으로 시스템을 파악하며 순차적인처리가 중요시되는 하향식(Top-down)방식으로 볼 수 있다.',
          isCorrect: true,
        },
        {
          text: '3. 데이터와 행위를 하나로 묶어 객체를 정의내리고 추상화시키는 작업이라 할 수 있다.',
          isCorrect: false,
        },
        {
          text: '4. 코드 재사용에 의한 프로그램 생산성 향상 및 요구에 따른 시스템의 쉬운 변경이 가능하다.',
          isCorrect: false,
        },
      ],
      score: 5,
    },
    {
      question: '19. 다음 중 최악의 경우 검색 효율이 가장 나쁜트리 구조는?',
      options: [
        { text: '1. AVL 트리', isCorrect: false },
        { text: '2. 레드-블랙 트리', isCorrect: false },
        { text: '3. 2-3 트리', isCorrect: false },
        { text: '4. 이진 탐색트리', isCorrect: true },
      ],
      score: 5,
    },
    {
      question:
        '20. 데이터베이스에서 인덱스(Index)와 관련한 설명으로 틀린 것은?',
      options: [
        {
          text: '1. 인덱스의 기본 목적은 검색 성능을 최적화하는 것으로 볼 수 있다',
          isCorrect: false,
        },
        {
          text: '2. B-트리 인덱스는 분기를 목적으로 하는 Branch Block을 가지고 있다.',
          isCorrect: false,
        },
        {
          text: '3. BETWEEN 등 범위(Range) 검색에 활용될 수 있다.',
          isCorrect: false,
        },
        {
          text: '4. 시스템이 자동으로 생성하여 사용자가 변경할 수 없다.',
          isCorrect: true,
        },
      ],
      score: 5,
    },
    // 다른 질문들 추가
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [userAnswers, setUserAnswers] = useState(
    Array(questions1.length).fill(null)
  )
  const [showIncorrectOnly, setShowIncorrectOnly] = useState(false) // 추가

  const handleAnswer = (isCorrect) => {
    setUserAnswers((prevUserAnswers) => {
      const updatedUserAnswers = [...prevUserAnswers]
      updatedUserAnswers[currentQuestion] = isCorrect
      return updatedUserAnswers
    })

    if (isCorrect) {
      setScore(score + questions1[currentQuestion].score)
    }

    if (currentQuestion < questions1.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
  }

  const resetExam = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowResult(false)
    setUserAnswers(Array(questions1.length).fill(null))
    setShowIncorrectOnly(false) // 추가
  }

  if (showResult) {
    const totalScore = questions1.reduce(
      (total, question) => total + question.score,
      0
    )

    return (
      <div className="Exam">
        <h2>시험 결과</h2>
        <p>
          당신의 점수: {score} / {totalScore}
        </p>
        <div className="result-container">
          <button onClick={() => setShowIncorrectOnly(!showIncorrectOnly)}>
            {showIncorrectOnly ? '전체 문제 보기' : '틀린 문제 확인'}
          </button>
          {showIncorrectOnly && (
            <ul>
              {questions1.map(
                (question, index) =>
                  !userAnswers[index] && (
                    <li key={index}>
                      <p>{question.question}</p>
                      <p>
                        정답:{' '}
                        {question.options.find((opt) => opt.isCorrect).text}
                      </p>
                    </li>
                  )
              )}
            </ul>
          )}
        </div>
        <button onClick={resetExam}>다시 풀기</button>
      </div>
    )
  }

  return (
    <div className="Exam">
      <h2>문제 {currentQuestion + 1}</h2>
      <p>{questions1[currentQuestion].question}</p>
      <ul>
        {questions1[currentQuestion].options.map((option, index) => (
          <li key={index}>
            <button onClick={() => handleAnswer(option.isCorrect)}>
              {option.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Exam1
