import "./App.css";
import React, { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  const fetchUserData = () => {
    fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
      result.json().then((resp) => {
        console.warn("result", resp);
        setUsers(resp);
      });
    });
    //  (data) => {
    //     ;
    //   };
  };
  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <div className="App">
      <table border="1">
        <tbody>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Username</td>
            <td>E-mail</td>
            <td>Phone</td>
            <td>Website</td>
            <td>Street</td>
          </tr>
          {users.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
              <td>{user.address.street}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
