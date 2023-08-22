import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { deleteStudentsService, listStudentsService } from "../services/students";
const ListStudents = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getStudents();
  }, []);
  const getStudents = async () => {
    try {
      const rest = await listStudentsService();
      if (rest.error === 400) {
        return setError(JSON.stringify(rest.messages));
      }
      if (rest.error === 401) {
        navigate("/Unauthorized");
      }
      setStudents(rest);
    } catch (error) {
      setError("Erro ao receber lista de alunos");
    }
  };
  const deleteStudents = async (id) => {
    try {
      const rest = await deleteStudentsService(id);

      if (rest.error === 400) {
        return setError(JSON.stringify(rest.messages));
      }
      if (rest.error === 401) {
        navigate("/Unauthorized");
      }
      getStudents();
    } catch (error) {
      setError("Erro ao apagar usuarios");
    }
  };
  return (
    <div>
      <Link to="/students/add" className="button is-primary mt-5">
        Add New Item
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th width="150">Action</th>
            <th>No</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Endereço</th>
          </tr>
        </thead>
        <tbody>
          {students?.map((student, index) => (
            <tr key={student.id}>
              <td>
                <Link
                  to={`/students/edit/${student.id}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                &nbsp;
                <button
                  onClick={() => deleteStudents(student.id)}
                  className="button is-small is-danger"
                >
                  Delete
                </button>
              </td>
              <td>{index + 1}</td>
              <td>{student.nome}</td>
              <td>{student.email}</td>
              <td>{student.telefone}</td>
              <td>{student.endereco}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>{error && <p>{error}</p>}</div>
    </div>
  );
};
export default ListStudents;
