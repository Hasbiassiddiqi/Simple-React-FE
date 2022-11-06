import axios from "axios";
import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import ReactTypingEffect from "react-typing-effect";

const Login = ({ title, desc }) => {
  const [NIP, setNIP] = useState("");
  const [password, setPassword] = useState("");
  const handleNIP = (inputNIP) => {
    setNIP(inputNIP);
  };
  const handlePass = (inputPass) => {
    setPassword(inputPass);
  };
  const userLogin = () => {
    // data user nip : 123032 password: 123
    const reqData = {
      nip: NIP,
      password: password,
    };
    axios({
      method: "POST",
      url: "http://localhost:3200/users/login",
      data: reqData,
    }).then((result) => {
      localStorage.setItem("nip", result.data.users.nip);
      localStorage.setItem("nama", result.data.users.nama);
      window.location.replace("/dashboard");
    });
  };

  return (
    <Container>
      <div className="d-flex justify-content-center fw-bold h3 my-4">
        <ReactTypingEffect
          text={[title, desc]}
          speed={100}
          eraseSpeed={100}
          eraseDelay={800}
          typingDelay={100}
        />
      </div>
      <Form className="w-50 mx-auto ">
        <Form.Group>
          <Form.Label className="fw-bold">NIP</Form.Label>
          <Form.Control
            type="number"
            placeholder="Masukkan NIP Anda"
            required
            onChange={(event) => handleNIP(event.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="fw-bold">PASSWORD</Form.Label>
          <Form.Control
            type="password"
            placeholder="Masukkan Password Anda"
            required
            onChange={(event) => handlePass(event.target.value)}
          />
        </Form.Group>
        <Button onClick={() => userLogin()} className="mt-4 w-100 btn-dark">
          Login Sekarang
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
