import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { listUsersService } from "../services/users";
const ListUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    try {
      const rest = await listUsersService();
      if (rest.error === 400) {
        return setError(JSON.stringify(rest.messages));
      }
      if (rest.error === 401) {
        navigate("/Unauthorized");
      }
      setUsers(rest.users);
    } catch (error) {
      setError("Erro ao Lista Usuarios");
    }
  };
  return (
    <div>
      <Link to="/register" className="button is-primary mt-5">
        Add New User
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Nome</th>
            <th>password</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>{error && <p>{error}</p>}</div>
    </div>
  );
};
export default ListUsers;
