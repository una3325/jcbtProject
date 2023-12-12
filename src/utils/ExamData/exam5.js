// 리눅스마스터
import React, { useState } from 'react'
import '../../styles/exam.css'

const Exam5 = () => {
  const questions1 = [
    {
      question:
        '1. 다음 중 ssh 데몬이 리눅스 부팅 시에 실행되도록 설정하는 명령으로 알맞은 것은?',
      options: [
        { text: '1. systemctl enable sshd', isCorrect: true },
        { text: '2. systemctl status sshd', isCorrect: false },
        { text: '3. systemctl active sshd', isCorrect: false },
        { text: '4. systemctl start sshd', isCorrect: false },
      ],
      score: 5,
    },
    {
      question:
        '2. 다음 중 원격지 X 서버에 응용 프로그램을 전송하기 위해 X 클라이언트에서 진행해야 하는 과정으로 알맞은 것은?',
      options: [
        { text: '1. xauth 명령으로 서버 주소를 등록한다.', isCorrect: false },
        { text: '2. xhpst 명령으로 서버 주소를 등록한다.', isCorrect: false },
        {
          text: '3. 환경변수인 DISPLAY의 값을 서버 주소로 변경한다.',
          isCorrect: true,
        },
        {
          text: '4. 환경변수인 TERM의 값을 서버 주소로 변경한다.',
          isCorrect: false,
        },
      ],
      score: 5,
    },
    {
      question:
        '3. 다음 중 백그라운드로 수행 중인 프로세스를 확인하는 명령으로 알맞은 것은?',
      options: [
        { text: '1. bg', isCorrect: false },
        { text: '2. fg', isCorrect: false },
        { text: '3. jobs', isCorrect: true },
        { text: '4. nohup', isCorrect: false },
      ],
      score: 5,
    },
    {
      question:
        '4. 다음 중 전송 계층-네트워크 계층-데이터링크 계층 순서로 나열된 PDU(Preotocol Data Unit) 단위로 알맞은 것은?',
      options: [
        { text: '1. frame-packet-segment', isCorrect: false },
        { text: '2. segment-packet-frame', isCorrect: true },
        { text: '3. packet-frame-segment ', isCorrect: false },
        { text: '4. packet-segment-frame', isCorrect: false },
      ],
      score: 5,
    },
    {
      question:
        '5. 다음 중 ssh로 접속한 호스트의 IP 주소를 확인할 때 사용하는 명령어로 알맞은 것은?',
      options: [
        { text: '1. ss', isCorrect: true },
        { text: '2. arp', isCorrect: false },
        { text: '3. mii-tool', isCorrect: false },
        { text: '4. ethtool', isCorrect: false },
      ],
      score: 5,
    },
    {
      question:
        '6. 다음 중 XFS 파일 시스템으로 운영 중인 CentOS 7에서 사용자 쿼터를 설정할 때 사용하는 명령으로 거리가 먼 것은?',
      options: [
        { text: '1. quota', isCorrect: true },
        { text: '2. edquota', isCorrect: false },
        { text: '3. setquota', isCorrect: false },
        { text: '4. xfs_quota', isCorrect: false },
      ],
      score: 5,
    },
    {
      question: '7. 다음 중 touch 명령어에 대한 설명으로 틀린 것은?',
      options: [
        {
          text: '1. 파일의 크기가 0인 빈 파일을 만들 때 사용한다.',
          isCorrect: false,
        },
        {
          text: '2. 파일의 Access Time을 변경할 때 사용한다.',
          isCorrect: false,
        },
        {
          text: '3. 파일의 Modify Time을 변경할 때 사용한다.',
          isCorrect: false,
        },
        {
          text: '4. 파일의 Change Time을 변경할 때 사용한다.',
          isCorrect: true,
        },
      ],
      score: 5,
    },
    {
      question:
        '8. 프로세스 아이디(PID)가 513인 bash 프로세스의 우선순위(NI)값이 0이다. 다음 중 NI 값을 변경하여 우선순위를 낮추는 명령으로 알맞은 것은?',
      options: [
        { text: '1. nice –5 513', isCorrect: false },
        { text: '2. nice –5 bash', isCorrect: true },
        { text: '3. renice –5 513', isCorrect: false },
        { text: '4. renice –5 bash', isCorrect: false },
      ],
      score: 5,
    },
    {
      question:
        '9. 다음 중 생성된 RAID 장치에 대한 레벨 정보를 확인할 때 사용하는 파일로 가장 알맞은 것은?',
      options: [
        { text: '1. /proc/mdadm', isCorrect: false },
        { text: '2. /proc/raidtools', isCorrect: false },
        { text: '3. /proc/partitions', isCorrect: false },
        { text: '4. /proc/mdstat', isCorrect: true },
      ],
      score: 5,
    },
    {
      question:
        '10. 다음 중 프린트 작업을 요청하는 명령어 조합으로 알맞은 것은?',
      options: [
        { text: '1. lp, lpstat', isCorrect: false },
        { text: '2. lp, lpc', isCorrect: false },
        { text: '3. lpr, lpc', isCorrect: false },
        { text: '4. lp, lpr', isCorrect: true },
      ],
      score: 5,
    },
    {
      question:
        '11. 다음 중 로그 설정 파일에서 가장 많은 기록이 남는 낮은 수준의 priority로 알맞은 것은?',
      options: [
        { text: '1. alert', isCorrect: false },
        { text: '2. crit', isCorrect: true },
        { text: '3. panic', isCorrect: false },
        { text: '4. emerg', isCorrect: false },
      ],
      score: 5,
    },
    {
      question:
        '12. 다음 중 /etc/services 파일의 수정은 불가하고 내용 추가만 가능하도록 설정하는 명령으로 알맞은 것은?',
      options: [
        { text: '1. setfacl –m +a /etc/services', isCorrect: false },
        { text: '2. setfacl –m +i /etc/services', isCorrect: false },
        { text: '3. chattr +a /etc/services', isCorrect: true },
        { text: '4. chattr +i /etc/services', isCorrect: false },
      ],
      score: 5,
    },
    {
      question:
        '13. 다음 XFS 파일 시스템에서 사용할 수 없는 백업도구로 알맞은 것은?',
      options: [
        { text: '1. dump', isCorrect: true },
        { text: '2. dd', isCorrect: false },
        { text: '3. cpio', isCorrect: false },
        { text: '4. rsync', isCorrect: false },
      ],
      score: 5,
    },
    {
      question:
        '14. 다음 중 LDAP과 RDBMS(관계형 데이터베이스 시스템)과의 비교 설명으로 틀린 것은?',
      options: [
        {
          text: '1. LDAP이 RDBMS에 비해 읽기 작업이 많은 곳에 유리하다.',
          isCorrect: false,
        },
        {
          text: '2. LDAP이 RDBMS에 비해 검색 작업이 많은 곳에 유리하다.',
          isCorrect: false,
        },
        {
          text: '3. LDAP은 계층형 트리 구조 형태이고, RDBMS는 행과 열 형태의 테이블 구조이다.',
          isCorrect: false,
        },
        {
          text: '4. LDAP이 RDBMS에 비해 쓰기 작업이 많은 곳에 유리하다.',
          isCorrect: true,
        },
      ],
      score: 5,
    },
    {
      question:
        '15. 다음 중 NIS 클라이언트에서 사용하는 명령어로 거리가 먼 것은?',
      options: [
        { text: '1. yppush', isCorrect: true },
        { text: '2. ypcat', isCorrect: false },
        { text: '3. yptest', isCorrect: false },
        { text: '4. ypwhich', isCorrect: false },
      ],
      score: 5,
    },
    {
      question:
        '16. 다음 중 KVM을 이용해서 가상 머신을 생성했을 때 기본적으로 적용되는 디스크 이미지 파일 형식으로 알맞은 것은?',
      options: [
        { text: '1. VDI', isCorrect: false },
        { text: '2. VMDK', isCorrect: false },
        { text: '3. VHD', isCorrect: false },
        { text: '4. QCOW2', isCorrect: true },
      ],
      score: 5,
    },
    {
      question:
        '17. 다음 중 프로토콜 데이터 단위를 OSI 7 모델의 하위 계층부터 상위 계층 순으로 올바르게 나열한 것은?',
      options: [
        { text: '1. bit → frame → packet → segment', isCorrect: true },
        { text: '2. bit → frame → segment → packet', isCorrect: false },
        { text: '3. bit → packet → frame → segment', isCorrect: false },
        { text: '4. bit → segment → frame → packet', isCorrect: false },
      ],
      score: 5,
    },
    {
      question:
        '18. 다음 중 외부에서 오는 ping에 대한 응답을 거부하도록 설정하는 명령으로 알맞은 것은?',
      options: [
        {
          text: '1. sysctl -w net.ipv4.icmp_echo_ignore_all=0',
          isCorrect: false,
        },
        {
          text: '2. sysctl -w net.ipv4.icmp_echo_ignore_all=1',
          isCorrect: true,
        },
        {
          text: '3. sysctl -n net.ipv4.icmp_echo_ignore_all=0',
          isCorrect: false,
        },
        {
          text: '4. sysctl -n net.ipv4.icmp_echo_ignore_all=1',
          isCorrect: false,
        },
      ],
      score: 5,
    },
    {
      question: '19. 다음 중 커널 컴파일의 순서로 알맞은 것은?',
      options: [
        {
          text: '1. make menuconfig → make mrproper → make bzImage',
          isCorrect: false,
        },
        {
          text: '2. make menuconfig → make bzImager → make mrproper',
          isCorrect: false,
        },
        {
          text: '3. make mrproper → make menuconfig → make bzImage',
          isCorrect: true,
        },
        {
          text: '4. make bzImage → make menuconfig → make mrproper',
          isCorrect: false,
        },
      ],
      score: 5,
    },
    {
      question:
        '20. 다음 중 등록된 cron 관련 파일을 제거하는 명령으로 알맞은 것은?',
      options: [
        { text: '1. crontab -e	', isCorrect: false },
        { text: '2. crontab -d', isCorrect: false },
        { text: '3. crontab -l	', isCorrect: false },
        { text: '4. crontab -r', isCorrect: true },
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

export default Exam5
