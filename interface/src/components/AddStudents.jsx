import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createStudentsService } from "../services/students";

const AddStudents = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [imagem, setImagem] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const saveProduct = async (e) => {
    e.preventDefault();
    try {
      const rest = await createStudentsService(
        nome,
        email,
        telefone,
        endereco,
        imagem
      );
      if (rest.error === 400) {
        return setError(JSON.stringify(rest.messages));
      }
      navigate("/");
    } catch (error) {
      setError("Erro ao requisitar salvamento de dados");
    }
  };
  return (
    <div>
      <form onSubmit={saveProduct}>
        <div className="field">
          <label className="label">Nome</label>
          <input
            type="text"
            className="input"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="-"
          />
        </div>
        <div className="field">
          <label className="label">E-mail</label>
          <input
            type="email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="-"
          />
        </div>
        <div className="field">
          <label className="label">Telefone</label>
          <input
            type="text"
            className="input"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            placeholder="-"
          />
        </div>
        <div className="field">
          <label className="label">Endereco</label>
          <input
            type="text"
            className="input"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            placeholder="-"
          />
        </div>
        <div className="field">
          <label className="label">Imagem</label>
          <input
            type="text"
            className="input"
            value={imagem}
            onChange={(e) => setImagem(e.target.value)}
            placeholder="-"
          />
        </div>
        <div>{error && <p> Error: {error}</p>}</div>
        <div className="field">
          <button className="button is-primary">Save</button>&nbsp;
          <button className="button is-warning" onClick={() => navigate("/")}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddStudents;
