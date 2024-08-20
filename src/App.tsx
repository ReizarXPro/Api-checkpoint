import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    function getusers() {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          setUsers(res.data);
          console.log("Data:", res.data);
        })

        .catch((err) => {
          setError(err);
          console.log("Error  users:", err);
        });
    }
    getusers();
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center", color: "bisque" }}>UsersTable</h1>
      <table>
        <tr>
          <th>Name</th>
          <th>UserName</th>
          <th>Email</th>
          <th>Phone</th>
          <th>website</th>
        </tr>
        {users.map((user) => (
          <tr>
            <td> {user.name}</td>
            <td> {user.username}</td>
            <td> {user.email}</td>
            <td> {user.phone}</td>
            <td> {user.website}</td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default App;
