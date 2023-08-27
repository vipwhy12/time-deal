import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Signup() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSignupSubmit = () => {
    if (userName.length < 2 || userName.length > 20) {
      alert('😢 유저명은 2자리수 이상 20자리 수 이하여야 합니다.');
      return;
    }

    if (password.length < 4 || password.length > 20) {
      alert('😢 비밀번호는 4자리 이상 20 자리수 이하여야 합니다.');
      return;
    }

    axios
      .post('http://localhost:8080/auth/signUp', {
        username: userName,
        password: password,
      })
      .then((response) => {
        setUserName('');
        setPassword('');
        alert('👀회원가입이 완료되었습니다!');

        console.log(response.status);
      })
      .catch((error) => {
        alert('회원가입에 실패하였습니다!' + error.response.data.message);
        console.log(error);
      });
  };

  const handleUserName = (event) => {
    setUserName(event.target.value);
    console.log(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
    console.log(event.target.value);
  };

  return (
    <>
      <header>
        <h5>💁🏻‍♀️ Join to TimeDeal!</h5>
      </header>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User name</Form.Label>
          <Form.Control
            type="text"
            placeholder="닉네임을 입력해주세요"
            onChange={handleUserName}
            value={userName}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="비밀번호를 입력해주세요"
            onChange={handlePassword}
            value={password}
          />
        </Form.Group>
        <Button variant="primary" onClick={() => handleSignupSubmit()}>
          가입
        </Button>
      </Form>
    </>
  );
}
