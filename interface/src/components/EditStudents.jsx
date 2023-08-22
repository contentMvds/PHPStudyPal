import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  editStudentsService,
  listByIdStudentService,
} from "../services/students";

const EditProduct = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [imagem, setImagem] = useState("");
  const [endereco, setEndereco] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();
  const updateProduct = async (e) => {
    e.preventDefault();
    try {
      if (nome) {
        const data = await editStudentsService(
          id,
          nome,
          email,
          endereco,
          telefone,
          imagem
        );
        if (data.error === 400) {
          setError(JSON.stringify(data.messages));
        } else {
          navigate("/dashboard");
        }
      }
    } catch (err) {
      setError("Error ao atualizar o estudante");
    }
  };
  useEffect(() => {
    getProductById();
  }, []);
  const getProductById = async () => {
    try {
      const data = await listByIdStudentService(id);
      setNome(data.nome);
      setEmail(data.email);
      setEndereco(data.endereco);
      setTelefone(data.telefone);
      setImagem(data.foto);
    } catch (error) {
      setError("Error ao carregar dados do estudante");
    }
  };
  return (
    <div>
      <form onSubmit={updateProduct}>
        <div className="field">
          <label className="label">Nome</label>
          <input
            type="text"
            className="input"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="-"
            required
          />
        </div>
        <div className="field">
          <label className="label">E-mail</label>
          <input
            type="text"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="-"
            required
          />
        </div>
        <div className="field">
          <label className="label">Endereço</label>
          <input
            type="text"
            className="input"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            placeholder="-"
            required
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
            required
          />
        </div>
        <div className="field">
          <label className="label">Foto</label>
          <input
            type="text"
            className="input"
            value={imagem}
            onChange={(e) => setImagem(e.target.value)}
            placeholder="-"
            required
          />
        </div>
        {error && <div>Alert: {error}</div>}
        <div className="field">
          <button className="button is-primary">Update</button>&nbsp;
          <button className="button is-warning" onClick={() => navigate("/")}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
export default EditProduct;
