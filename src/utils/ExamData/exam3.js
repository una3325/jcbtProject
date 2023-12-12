import React, { useState } from 'react'
import '../../styles/exam.css'

const Exam3 = () => {
  const questions1 = [
    {
      question:
        '1. C Class의 네트워크 주소가 ′192.168.10.0′ 이고, 서브넷 마스크가 ′255.255.255.240′ 일 때, 최대 사용 가능한 호스트 수는?(단, 네트워크 주소와 브로드캐스트 호스트는 제외한다.)',
      options: [
        { text: '1. 10개', isCorrect: false },
        { text: '2. 14개', isCorrect: true },
        { text: '3. 26개', isCorrect: false },
        { text: '4. 32개', isCorrect: false },
      ],
      score: 5,
    },
    {
      question: '2. TCP가 제공하는 기능으로 옳지 않은 것은?',
      options: [
        {
          text: '1. 종단 간 흐름 제어를 위해 동적 윈도우(Dynamic Sliding Window) 방식을 사용한다.',
          isCorrect: false,
        },
        {
          text: '2. 한 번에 많은 데이터의 전송에 유리하기 때문에 화상 통신과 같은 실시간 통신에 사용된다.',
          isCorrect: true,
        },
        {
          text: '3. 송수신되는 데이터의 에러를 제어함으로서 신뢰성 있는 데이터 전송을 보장한다.',
          isCorrect: false,
        },
        {
          text: '4. Three Way Handshaking 과정을 통해 데이터를 주고받는다.',
          isCorrect: false,
        },
      ],
      score: 5,
    },
    {
      question:
        '3. 프로토콜과 일반적으로 사용되는 포트번호(Well-Known Port)의 연결이 옳지 않은 것은?',
      options: [
        { text: '1. FTP : 21번	', isCorrect: false },
        { text: '2. Telnet : 23번', isCorrect: false },
        { text: '3. HTTP : 180번', isCorrect: true },
        { text: '4. SMTP : 25번', isCorrect: false },
      ],
      score: 5,
    },
    {
      question:
        '4. Ethernet 같은 네트워크가 제공하는 브로드캐스트 기능을 사용하여 목적지 IP Address에 물리적 하드웨어 주소를 매핑시키는 것은?',
      options: [
        { text: '1. ARP', isCorrect: true },
        { text: '2. RARP', isCorrect: false },
        { text: '3. DNS', isCorrect: false },
        { text: '4. DHCP', isCorrect: false },
      ],
      score: 5,
    },
    {
      question:
        '5. 네트워크와 서버를 관리하는 Kim 사원은 인터넷이 느려졌다는 민원을 받았다. 이를 해결하기 위해서 해당 ISP 주소쪽으로 명령어(A)를 입력하였더니 다소 지연이 있었음을 발견하였다. 이 사항을 확인하기 위해서 (A)에 들어가야 할 명령어는?(단, 윈도우 계열의 명령프롬프트(cmd)에서 실행하였다.)',
      options: [
        { text: '1. nslookup', isCorrect: false },
        { text: '2. tractracerouteert', isCorrect: false },
        { text: '3. ping', isCorrect: false },
        { text: '4. tracert', isCorrect: true },
      ],
      score: 5,
    },
    {
      question:
        '6. IPv4 Address 중 네트워크 ID가 ′127′로 시작하는 주소의 용도는?',
      options: [
        { text: '1. 제한적 브로드캐스트 주소', isCorrect: false },
        { text: '2. B Class의 멀티캐스트 주소', isCorrect: false },
        { text: '3. C Class의 사설(Private) IP 주소', isCorrect: false },
        { text: '4. 루프백(Loopback) 주소', isCorrect: true },
      ],
      score: 5,
    },
    {
      question:
        '7. 네트워크 계층에서 IP(Internet Protocol)는 핵심 프로토콜이다. 단편화 작업 중 분할되는 Data를 구별하기 위한 것은?',
      options: [
        { text: '1. DF Flag', isCorrect: true },
        { text: '2. 서비스 타입', isCorrect: false },
        { text: '3. 오프셋', isCorrect: false },
        { text: '4. TTL', isCorrect: false },
      ],
      score: 5,
    },
    {
      question: '8. TCP/IP에서 Multicast에 대한 설명으로 올바른 것은?',
      options: [
        {
          text: '1. 하나의 호스트가 네트워크 내의 정해진 호스트 그룹으로 메시지를 보내는 것',
          isCorrect: true,
        },
        {
          text: '2. 하나의 호스트가 네트워크 내의 모든 호스트에게 메시지를 보내는 것',
          isCorrect: false,
        },
        {
          text: '3. 하나의 호스트가 네트워크 내의 하나의 호스트로 메시지를 보내는 것',
          isCorrect: false,
        },
        {
          text: '4. 하나의 호스트가 다시 자기 자신에게 메시지를 보내는 것',
          isCorrect: false,
        },
      ],
      score: 5,
    },
    {
      question: '9. 다음 중 무선LAN 보안을 위해 가장 강력한 방법은?',
      options: [
        { text: '1. WEP(Wired Equivalent Privacy)', isCorrect: false },
        { text: '2. WPA(Wi-Fi Protected Access)', isCorrect: false },
        { text: '3. WPA2(IEEE802.11i)', isCorrect: true },
        { text: '4. MAC주소필터링', isCorrect: false },
      ],
      score: 5,
    },
    {
      question:
        '10. Linux 시스템에 좀비 프로세스가 많이 생겨 시스템을 재부팅하려고 한다. 현재 Linux 시스템에 접속해 있는 사용자에게 메시지를 전달하고, 5분 후에 시스템을 재부팅시키는 명령어는?',
      options: [
        {
          text: '1. shutdown -r now Warning! After 5 minutes will be system shutdown!!',
          isCorrect: false,
        },
        {
          text: '2. shutdown -r +5 Warning! After 5 minutes will be system shutdown!!',
          isCorrect: true,
        },
        {
          text: '3. shutdown now Warning! After 5 minutes will be system shutdown!!',
          isCorrect: false,
        },
        {
          text: '4. shutdown +5 Warning! After 5 minutes will be system shutdown!!',
          isCorrect: false,
        },
      ],
      score: 5,
    },
    {
      question:
        '11. Windows Server 2016에서 지원하는 Hyper-V에 대한 설명으로 옳지 않은 것은?',
      options: [
        { text: '1. 하드웨어 사용율을 높여준다.', isCorrect: false },
        { text: '2. 서버 가용성이 줄어든다.', isCorrect: true },
        { text: '3. 유지비용을 줄일 수 있다.', isCorrect: false },
        { text: '4. 개발 및 테스트의 효율성을 향상시킨다.', isCorrect: false },
      ],
      score: 5,
    },
    {
      question:
        '12. Linux 시스템에서 일반적으로 사용자 암호 정보를 가지는 디렉터리는?',
      options: [
        { text: '1. /etc', isCorrect: true },
        { text: '2. /sbin', isCorrect: false },
        { text: '3. /home', isCorrect: false },
        { text: '4. /lib', isCorrect: false },
      ],
      score: 5,
    },
    {
      question:
        '13. Windows Server 2016의 ′netstat′ 명령 중 라우팅 테이블을 확인할 수 있는 명령 옵션은?',
      options: [
        { text: '1. netstat –a', isCorrect: false },
        { text: '2. netstat –r', isCorrect: true },
        { text: '3. netstat –n', isCorrect: false },
        { text: '4. netstat -s', isCorrect: false },
      ],
      score: 5,
    },
    {
      question: '14. 현재 LAN 카드의 MAC Address는 몇 비트의 번호체계인가?',
      options: [
        { text: '1. 32 비트', isCorrect: false },
        { text: '2. 48 비트', isCorrect: true },
        { text: '3. 64 비트', isCorrect: false },
        { text: '4. 128 비트', isCorrect: false },
      ],
      score: 5,
    },
    {
      question:
        '15. Windows Server 2016에서 클라이언트의 Host Name, IP 주소, 서브넷 마스크, DNS Server, 기본 게이트웨이 등의 설정 사항을 볼 수 있는 명령어는?',
      options: [
        { text: '1. arp –a', isCorrect: false },
        { text: '2. convert', isCorrect: false },
        { text: '3. netstat', isCorrect: false },
        { text: '4. ipconfig /all', isCorrect: true },
      ],
      score: 5,
    },
    {
      question: '16. CSMA/CD의 특징으로 옳지 않은 것은?',
      options: [
        { text: '1. 충돌 도메인이 작을수록 좋다.', isCorrect: false },
        {
          text: '2. 충돌이 발생하면 임의의 시간 동안 대기하므로 지연 시간을 예측하기 어렵다.',
          isCorrect: false,
        },
        {
          text: '3. 네트워크상의 컴퓨터들이 데이터 전송을 개시하기 위해서는 반드시 토큰이라는 권한을 가지고 있어야 한다.',
          isCorrect: true,
        },
        {
          text: '4. 컴퓨터들은 케이블의 데이터 흐름 유무를 감시하기 위해 특정 신호를 주기적으로 보낸다.',
          isCorrect: false,
        },
      ],
      score: 5,
    },
    {
      question: '17. 서브넷 마스크에 대한 설명으로 옳지 않은 것은?',
      options: [
        {
          text: '1. A Class는 기본 서브넷 마스크로 ′255.0.0.0′을 이용한다.',
          isCorrect: false,
        },
        {
          text: '2. B Class에서 두 개의 네트워크로 나누고자 한다면, 실제 서브넷 마스크는 ′255.255.128.0′이 된다.',
          isCorrect: false,
        },
        {
          text: '3. C Class는 기본 서브넷 마스크로 ′255.255.255.0′을 이용한다.',
          isCorrect: false,
        },
        {
          text: '4. C Class에서 다섯 개의 네트워크로 나누고자 한다면, 실제 서브넷 마스크는 ′255.255.224.0′이 된다.',
          isCorrect: true,
        },
      ],
      score: 5,
    },
    {
      question:
        '18. IGMP(Internet Group Management Protocol)에 대한 설명으로 올바른 것은?',
      options: [
        { text: '1. OSI 모델 중 4계층 프로토콜이다.', isCorrect: false },
        {
          text: '2. 비대칭 프로토콜로써 TTL(Time to Live)를 제공하지 않는다.',
          isCorrect: false,
        },
        {
          text: '3. 로컬 네트워크상의 멀티캐스팅 그룹제어를 수행하기 위한 프로토콜이다.',
          isCorrect: true,
        },
        {
          text: '4. 데이터의 유니캐스팅에 적합한 프로토콜이다.',
          isCorrect: false,
        },
      ],
      score: 5,
    },
    {
      question:
        '19. LAN의 구성형태 중 중앙의 제어점으로부터 모든 기기가 점 대 점(Point to Point) 방식으로 연결된 구성형태는?',
      options: [
        { text: '1. 링형 구성', isCorrect: false },
        { text: '2. 스타형 구성', isCorrect: true },
        { text: '3. 버스형 구성', isCorrect: false },
        { text: '4. 트리형 구성', isCorrect: false },
      ],
      score: 5,
    },
    {
      question:
        '20. 신뢰하지 않는 외부 네트워크와 신뢰하는 내부 네트워크 사이를 지나는 패킷을 미리 정한 규칙에 따라 차단하거나 보내주는 기능을 하는 하드웨어나 소프트웨어를 방화벽(Firewall) 이라고 한다. 다음 중 방화벽의 주요 기능이 아닌 것은?',
      options: [
        {
          text: '1. 통과시킬 접근과 거부할 접근에 따라 허용 또는 차단을 수행한다.',
          isCorrect: false,
        },
        {
          text: '2. 허용 또는 차단된 접근에 대한 기록을 유지한다.',
          isCorrect: false,
        },
        {
          text: '3. 메시지 인증, 사용자 인증, 클라이언트 인증 등으로 인증을 수행한다.',
          isCorrect: false,
        },
        {
          text: '4. 한 방화벽에서 다른 방화벽으로 데이터를 복호화해서 보낸다.',
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

export default Exam3
