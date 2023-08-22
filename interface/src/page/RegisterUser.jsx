import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUserService } from "../services/users";

const RegisterUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const submitUser = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError("Confirmação de senha diferente da senha");
    }
    try {
      const rest = await registerUserService(password, confirmPassword, email);
      if (rest?.error) {
        return setError(JSON.stringify(rest.messages));
      }
      navigate("/login");
    } catch (error) {
      setError("Erro ao requisitar salvamento de dados");
    }
  };

  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-5-tablet is-5-desktop is-5-widescreen">
              <form action="" className="box" onSubmit={submitUser}>
                <h3 className="title is-3">Cadastro de login</h3>
                <div className="field">
                  <label htmlFor="" className="label">
                    E-mail
                  </label>
                  <div className="control has-icons-left">
                    <input
                      type="email"
                      placeholder="@gmail.com"
                      className="input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <span className="icon is-small is-left">
                      <i className="fa fa-envelope"></i>
                    </span>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="" className="label">
                    Senha
                  </label>
                  <div className="control has-icons-left">
                    <input
                      type="password"
                      placeholder="*******"
                      className="input"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <span className="icon is-small is-left">
                      <i className="fa fa-lock"></i>
                    </span>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="" className="label">
                    Confirmação de Senha
                  </label>
                  <div className="control has-icons-left">
                    <input
                      type="password"
                      placeholder="*******"
                      className="input"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                    <span className="icon is-small is-left">
                      <i className="fa fa-lock"></i>
                    </span>
                  </div>
                </div>
                <div className="field">
                  <button className="button is-success">Registrar</button>
                  <button
                    className="button is-warning ml-2"
                    onClick={() => navigate("/login")}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="columns is-centered">
            <div className="column is-5-tablet is-4-desktop is-5-widescreen">
              {error && (
                <div className="notification is-danger">
                  <button
                    class="delete"
                    onClick={() => setError(false)}
                  ></button>
                  <p>{error}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterUser;
