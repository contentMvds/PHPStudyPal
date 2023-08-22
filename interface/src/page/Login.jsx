import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { setToken } from "../utils/tokenUtils";
import { signupService } from "../services/login";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const submitLogin = async (e) => {
    e.preventDefault();
    try {
      const rest = await signupService(password, email);
      if (rest?.error) {
        return setError(JSON.stringify(rest.messages));
      }
      setToken(rest.token);
      navigate("/");
    } catch (error) {
      setError("Erro ao requisitar salvamento de dados");
    }
  };
  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-5-tablet is-4-desktop is-5-widescreen">
              <form action="" className="box" onSubmit={submitLogin}>
                <h3 className="title is-3">Login para o sistema de usuarios</h3>
                <div className="field">
                  <label htmlFor="" className="label">
                    E-mail
                  </label>
                  <div className="control has-icons-left">
                    <input
                      type="email"
                      placeholder="-@gmail.com"
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
                <div
                  className="field columns mt-2"
                  style={{ justifyContent: "center" }}
                >
                  <button className="button is-success">Login</button>
                  <Link to="/register" className="button is-primary ml-2">
                    Registar
                  </Link>
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

export default Login;
