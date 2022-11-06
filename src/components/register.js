import axios from "axios";
import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import ReactTypingEffect from "react-typing-effect";

const Register = ({ title, desc }) => {
  const [NIP, setNIP] = useState("");
  const [nama, setNama] = useState("");
  const [password, setPassword] = useState("");
  const handleNIP = (inputNIP) => {
    setNIP(inputNIP);
  };
  const handleNama = (inputNama) => {
    setNama(inputNama);
  };
  const handlePass = (inputPass) => {
    setPassword(inputPass);
  };
  const userRegister = () => {
    // data user nip : 123032 password: 123
    const reqData = {
      nip: NIP,
      nama: nama,
      password: password,
    };
    axios({
      method: "POST",
      url: "http://localhost:3200/users",
      data: reqData,
    }).then((result) => {
      if (result.data.registered) {
        alert("user sudah berhasil di daftarkan");
        window.location.replace("/login");
      } else {
        alert("Gagal mendaftar coba dengan nip lain");
      }
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
          <Form.Label className="fw-bold">NAMA</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukkan NIP Anda"
            required
            onChange={(event) => handleNama(event.target.value)}
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
        <Button onClick={() => userRegister()} className="mt-4 w-100 btn-dark">
          Register Sekarang
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
