// 정보보안기사
import React, { useState } from 'react'
import '../../styles/exam.css'

const Exam2 = () => {
  const questions1 = [
    {
      question: '1. 안드로이드 adb를 통해 접속 후 쓰기 가능한 디렉터리는?',
      options: [
        { text: '1. /system/', isCorrect: false },
        { text: '2. /data/app', isCorrect: false },
        { text: '3. /data/local/tmp/', isCorrect: true },
        { text: '4. /bin/', isCorrect: false },
      ],
      score: 5,
    },
    {
      question: '2. 인증 장치에 대한 설명으로 옳은 것은?',
      options: [
        {
          text: '1. USB 메모리에 디지털 증명서를 넣어 인증 디바이스로 하는 경우 그 USB 메모리를 접속하는 PC의 MAC 어드레스가 필요하다.',
          isCorrect: false,
        },
        {
          text: '2. 성인의 홍채는 변화가 없고 홍채 인증에서는 인증 장치에서의 패턴 갱신이 불필요하다.',
          isCorrect: true,
        },
        {
          text: '3. 정전용량 방식의 지문인증 디바이스 LED 조명을 설치한 실내에서는 정상적으로 인증할 수 없게 될 가능성이 높다.',
          isCorrect: false,
        },
        {
          text: '4. 인증에 이용되는 접촉형 IC 카드는 카드 내의 코일의 유도 기전력을 이용하고 있다.',
          isCorrect: false,
        },
      ],
      score: 5,
    },
    {
      question: '3. 악성프로그램에 대한 설명으로 틀린 것은?',
      options: [
        {
          text: '1. 바이러스 : 한 시스템에서 다른 시스템으로 전파하기 위해서 사람이나 도구의 도움이 필요한 악성프로그램이다.',
          isCorrect: false,
        },
        {
          text: '2. 웜 : 한 시스템에서 다른 시스템으로 전파하는데 있어서 외부의 도움이 필요하지 않은 악성프로그램이다.',
          isCorrect: false,
        },
        {
          text: '3. 백도어 : 사용자의 동의없이 설치되어 컴퓨터 정보 및 사용자 개인정보를 수집하고 전송하는 악성프로그램이다.',
          isCorrect: true,
        },
        {
          text: '4. 논리 폭탄 : 합법적 프로그램 안에 내장된 코드로서 특정한 조건이 만족되었을 때 작동하는 악성 코드이다.',
          isCorrect: false,
        },
      ],
      score: 5,
    },
    {
      question:
        '4. 윈도우 운영체제의 레지스트리에 대한 설명으로 틀린 것은?(복수정답가능)',
      options: [
        {
          text: '1. 시스템 구성정보를 저장하는 데이터베이스로 SYSTEM.DAT, USER.DAT 파일을 말한다.',
          isCorrect: false,
        },
        {
          text: '2. 레지스트리는 regedit.exe 전용 편집기에 의해서만 편집이 가능하다.',
          isCorrect: false,
        },
        {
          text: '3. 윈도우 레지스트리 키는 HKEY_CLASS_ROOT, HKEY_CURRENT_USER, HKEY_LOCAL_MACHINE, HKEY_USERS, HKEY_CURRENT_CONFIG 등이 있다.',
          isCorrect: true,
        },
        {
          text: '4. 레지스트리 백업 및 복구는 shell.exe를 구동하여 행한다.',
          isCorrect: true,
        },
      ],
      score: 5,
    },
    {
      question: '5. UDP Flooding의 대응 방안으로 틀린 것은?',
      options: [
        { text: '1. 도착지 IP별 임계치 기반 차단', isCorrect: true },
        { text: '2. 미사용 프로토콜 필터링', isCorrect: false },
        { text: '3. 패킷 크기 기반 차단', isCorrect: false },
        { text: '4. Anycast를 이용한 대응', isCorrect: false },
      ],
      score: 5,
    },
    {
      question:
        '6. 다음 중 원격지 서버의 스니핑 모니터링 프로그램인 sentinal을 이용하여 스니퍼를 탐지하는 예시와 그에 대한 의미로 틀린 것은?',
      options: [
        {
          text: '1. ./sentinel –a –t 211.47.65.4 : ARP 테스트',
          isCorrect: false,
        },
        {
          text: '2. ./sentinel –d –f 1.1.1.1 –t 211.47.65.4 : DNS 테스트',
          isCorrect: false,
        },
        {
          text: '3. ./sentinel–e –t 211.47.65.4 : Etherping 테스트',
          isCorrect: false,
        },
        {
          text: '4. ./sentinel–t 211.47.65.4 –f 1.1.1.1 –d –a - : 3개의 테스트 중 하나만 테스트',
          isCorrect: true,
        },
      ],
      score: 5,
    },
    {
      question: '7. 네트워크 도청을 예방하기 위한 대책으로 틀린 것은?',
      options: [
        {
          text: '1. 업무용 무선 AP와 방문자용 AP를 같이 사용한다.',
          isCorrect: true,
        },
        {
          text: '2. 무선 AP의 비밀번호는 쉽게 예측하지 못하는 안전한 비밀번호로 설정한다.',
          isCorrect: false,
        },
        {
          text: '3. 업무용 단말기는 방문자용 AP에 접속하지 않도록 조치한다.',
          isCorrect: false,
        },
        {
          text: '4. 중요 정보는 암호화 통신을 이용하여 전송한다.',
          isCorrect: false,
        },
      ],
      score: 5,
    },
    {
      question: '8. OTP에 대한 설명으로 틀린 것은?',
      options: [
        { text: '1. 의미있는 숫자로 구성된다.', isCorrect: true },
        { text: '2. 비밀번호 재사용이 불가능하다.', isCorrect: false },
        { text: '3. 비밀번호 유추가 불가능하다.', isCorrect: false },
        {
          text: '4. 사전 공격(Dictionary Attack)에 안전하다.',
          isCorrect: false,
        },
      ],
      score: 5,
    },
    {
      question: '9. 다크웹(Dark Web)에 대한 설명으로 틀린 것은?',
      options: [
        {
          text: '1. 공공인터넷을 사용하는 오버레이 네트워크(Overlay Network)이다.',
          isCorrect: false,
        },
        {
          text: '2. 토르(TOR)같은 특수한 웹브라우저를 사용해야만 접근할 수 있다.',
          isCorrect: false,
        },
        { text: '3. 딥웹(Deep web)은 다크웹의 일부분이다.', isCorrect: true },
        { text: '4. 다크넷에 존해하는 웹사이트를 의미한다.', isCorrect: false },
      ],
      score: 5,
    },
    {
      question: '10. DDos 공격 형태 중 자원 소진 공격이 아닌 것은?',
      options: [
        { text: '1. SYN Flooding', isCorrect: false },
        { text: '2. ACK Flooding', isCorrect: false },
        { text: '3. ICMP Flooding', isCorrect: true },
        { text: '4. DNS Query Flooding', isCorrect: false },
      ],
      score: 5,
    },
    {
      question: '11. SSO(Single Sign On)와 관련이 없는 것은?',
      options: [
        { text: '1. Delegation 검사 ', isCorrect: false },
        { text: '2. Propagation 방식', isCorrect: false },
        { text: '3. 웹 기반 쿠키 도메인 SSO', isCorrect: false },
        { text: '보안토큰', isCorrect: true },
      ],
      score: 5,
    },
    {
      question: '12. DNS(Domain Name System)에 대한 설명으로 틀린 것은?',
      options: [
        {
          text: '1. DNS 서비스는 클라이언트에 해당하는 리졸버(resolver)와 서버에 해당하는 네임서버(name server)로 구성되며, DNS 서비스에 해당되는 포트 번호는 53번이다.',
          isCorrect: false,
        },
        {
          text: '2. 주(primary) 네임서버와 보조(secondary) 네임서버는 DNS 서비스 제공에 필요한 정보가 포함된 존(zone) 파일을 기초로 리졸버로부터의 요청을 처리한다.',
          isCorrect: false,
        },
        {
          text: '3. DNSSEC 보안 프로토콜은 초기 DNS 서비스가 보안 기능이 포함되지 않았던 문제점을 해결하기 위해 개발되었으며, DNS 데이터의 비밀성, 무결성, 출처 인증 등의 기능을 제공한다.',
          isCorrect: true,
        },
        {
          text: '4. ISP 등이 운영하는 캐시 네임서버가 관리하는 DNS 캐시에 IP 주소, UDP 포트번호, DNS 메시지 ID값이 조작된 정보를 추가함으로써 DNS 캐시 포이즈닝(poisoning) 공격이 가능하다.',
          isCorrect: false,
        },
      ],
      score: 5,
    },
    {
      question:
        '13. 합성수 n을 사용하는 RSA 전자서명 환경에서 메시지 M에 대해 난수 r에 공개 검증키 e를 가지고 reM mod n값을 서명자에게 전송하는 전자서명 기법은 무엇인가?',
      options: [
        { text: '1. 은닉서명	', isCorrect: true },
        { text: '2. 위임서명', isCorrect: false },
        { text: '3. 부인방지 서명', isCorrect: false },
        { text: '4. 이중서명', isCorrect: false },
      ],
      score: 5,
    },
    {
      question:
        '14. 메시지 출처 인증(Message Origin Authentication)에 활용되는 암호 기술 중 대칭키 방식에 해당하는 것은?',
      options: [
        { text: '1. 전자서명', isCorrect: false },
        { text: '2. 해시함수', isCorrect: false },
        { text: '3. 이중서명	', isCorrect: false },
        { text: '4. 메시지 인증 코드', isCorrect: true },
      ],
      score: 5,
    },
    {
      question: '15. 다음 중 공개키 암호의 필요성으로 틀린 것은?',
      options: [
        { text: '1. 무결성', isCorrect: true },
        { text: '2. 키 관리 문제', isCorrect: false },
        { text: '3. 인증', isCorrect: false },
        { text: '4. 부인방지', isCorrect: false },
      ],
      score: 5,
    },
    {
      question: '16. 위험분석의 구성요소가 아닌 것은?',
      options: [
        { text: '1. 취약점', isCorrect: false },
        { text: '2. 위협', isCorrect: false },
        { text: '3. 비용', isCorrect: true },
        { text: '4. 자산', isCorrect: false },
      ],
      score: 5,
    },
    {
      question: '17. KDC를 이용한 키 분배 방식에 대한 설명 중 옳지 않은 것은?',
      options: [
        {
          text: '1. 사용자들은 사전에 KDC와 마스터 키를 공유해야 한다.',
          isCorrect: false,
        },
        {
          text: '2. KDC는 일회용 세션키를 사용자의 공개키로 암호화하여 전송한다.',
          isCorrect: true,
        },
        {
          text: '3. 사용자의 요청이 있는 경우, KDC는 일회용 세션키를 생선한다.',
          isCorrect: false,
        },
        {
          text: '4. 사용자들 간에는 사전에 공유한 비밀정보가 필요하지 않다.',
          isCorrect: false,
        },
      ],
      score: 5,
    },
    {
      question:
        '18. Rabin 암호시스템에서 암호문의 제곱근을 구하여 복호화하면 평문 후보가 몇 개 나오는가?',
      options: [
        { text: '1. 1', isCorrect: false },
        { text: '2. 2', isCorrect: false },
        { text: '3. 3', isCorrect: false },
        { text: '4. 4', isCorrect: true },
      ],
      score: 5,
    },
    {
      question:
        '19. 개인정보의 가명·익명처리 시 개인정보 일부 또는 전부를 대체하는 일반화 방법으로 다음 설명에 해당되는 기술은?',
      options: [
        { text: '1. 상하단코딩(Top and bottom coding)', isCorrect: false },
        { text: '2. 제어 라운딩(Controlled rounding)', isCorrect: false },
        { text: '3. 일반 라운딩(Rounding)', isCorrect: true },
        { text: '4. 랜덤 라운딩(Random rounding)', isCorrect: false },
      ],
      score: 5,
    },
    {
      question: '20. 다음 중 정량적 분석의 장점이 아닌 것은?',
      options: [
        { text: '1. 비용대비 이익을 평가할 필요가 없다.', isCorrect: true },
        {
          text: '2. 위험평가 결과가 금전적 가치, 백분율, 확률 등으로 표현되어 이해가 쉽다.',
          isCorrect: false,
        },
        { text: '3. 위험관리 성능평가가 용이하다.', isCorrect: false },
        {
          text: '4. 정보자산의 가치가 논리적으로 평가되고 화폐로 표현되어 이해가 쉽다.6',
          isCorrect: false,
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

export default Exam2
