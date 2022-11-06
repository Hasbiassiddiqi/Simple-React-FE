import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
import logout from "./logout";

const Edit = ({ title }) => {
  const [nama, setNama] = useState(localStorage.getItem("nama"));
  const [password, setPassword] = useState([""]);
  const [newPass, setNewPass] = useState([""]);
  const updateProfile = () => {
    const reqData = {
      nip: localStorage.getItem("nip"),
      newPass: newPass,
      password: password,
      nama: nama,
    };
    axios({
      method: "PUT",
      url: `http://localhost:3200/users`,
      data: reqData,
    }).then((result) => {
      if (result.data.users) {
        logout();
      } else {
        alert("Update gagal");
      }
    });
  };
  return (
    <Form className="my-4">
      <Form.Group>
        <Form.Label>
          Nama
          <Form.Control
            onChange={(event) => setNama(event.target.value)}
            defaultValue={localStorage.getItem("nama")}
          />
        </Form.Label>
      </Form.Group>
      <Form.Group>
        <Form.Label>
          Password Lama
          <Form.Control onChange={(event) => setPassword(event.target.value)} />
        </Form.Label>
      </Form.Group>
      <hr />
      <Form.Group>
        <Form.Label>
          Password Baru
          <Form.Control onChange={(event) => setNewPass(event.target.value)} />
        </Form.Label>
      </Form.Group>
      <Button className="w-100 btn-success" onClick={() => updateProfile()}>
        Update Profile
      </Button>
    </Form>
  );
};
export default Edit;
