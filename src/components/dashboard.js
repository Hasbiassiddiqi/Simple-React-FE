import { useEffect, useState } from "react";
import { Badge, Button, Container, FormCheck } from "react-bootstrap";
import axios from "axios";
import Edit from "./edit";

const Dashboard = ({ title }) => {
  const [absensiList, setAbsensiList] = useState([]);
  const [absenNotifier, setAbsenNotifier] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem("nama") && !localStorage.getItem("nip")) {
      window.location.replace("/login");
    }
    axios({
      method: "GET",
      url: "http://localhost:3200/absensi",
      data: "",
    }).then((result) => setAbsensiList(result.data.absensi));
  }, [absenNotifier]);
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  const check = (params) => {
    axios({
      method: "POST",
      url: `http://localhost:3200/absensi/${params}`,
      data: { nip: localStorage.getItem("nip") },
    }).then((result) => {
      setAbsenNotifier(!absenNotifier);
      if (result.data) {
        alert(`berhasil ${params}`);
      } else {
        alert(`${params} Gagal`);
      }
    });
  };

  return (
    <Container>
      <main className="col-md-9 ms-sm-auto col-lg-12 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Hello {localStorage.getItem("nama")}!</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            <div className="btn-group me-2">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Share
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Export
              </button>
            </div>
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary dropdown-toggle"
            >
              <span
                data-feather="calendar"
                className="align-text-bottom"
              ></span>
              This week
            </button>
          </div>
        </div>
        <h2>{title}</h2>
        <div>
          <p>nip {localStorage.getItem("nip")} </p>
          <Button onClick={() => logout()} className="mt-4">
            LOGOUT
          </Button>
          <Edit />
        </div>
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">NIP</th>
                <th scope="col">Status</th>
                <th scope="col">Tanggal</th>
              </tr>
            </thead>
            <tbody>
              {absensiList.map((absen, i) => {
                const { users_nip, status, createdAt } = absen;
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{users_nip}</td>
                    <td>{status}</td>
                    <td>{createdAt}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="d-flex justify-content-center gap-2">
          <Badge
            pill
            bg="success"
            style={{ cursor: "pointer" }}
            onClick={() => check("checkin")}
          >
            checkin
          </Badge>
          <Badge
            pill
            bg="danger"
            style={{ cursor: "pointer" }}
            onClick={() => check("checkout")}
          >
            checkout
          </Badge>
        </div>
      </main>
    </Container>
  );
};
export default Dashboard;
