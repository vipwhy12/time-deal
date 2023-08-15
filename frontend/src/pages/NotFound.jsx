import { Link } from 'react-router-dom';

export default function NotFound() {
  return(
    <>
      <header>
        <title>Not Found</title>
        <h2>Page Not Found.</h2>
      </header>
      <main>
        <h4>🙇🏻‍♀️찾으려는 페이지가 없거나 이동했습니다.🙇🏻‍♀️</h4>
        <Link to="/">🏠메인페이지로 돌아가기!🏠</Link>
      </main>
    </>
  )
}