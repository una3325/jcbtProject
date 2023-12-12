import React from 'react'

function MyPage() {
  return (
    <form>
      <label htmlFor="username">test1:</label>
      <input type="text" name="test1" required />
      <br />
      <label htmlFor="password">test2:</label>
      <input type="password" name="test2" required />
      <br />
      <input type="submit" value="로그인" />
    </form>
  )
}

export default MyPage
