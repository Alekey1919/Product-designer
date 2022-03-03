import React from "react";
import { Link } from "react-router-dom";
import useLogin from "./useLogin";

import "./Login.css";
import Logo from "../../images/webp/product-designer-logo-black.webp";

function Login() {
  const {
    values,
    recovery,
    singIn,
    handleEmailInput,
    handlePasswordInput,
    register,
    openChangePassword,
    closeChangePassword,
    changePassword,
  } = useLogin();

  if (recovery) {
    return (
      <div className="login-page-container">
        <div className="login-container">
          <div className="login-logo">
            <Link to="/">
              <img src={Logo} alt="Logo" className="login-logo-img" />
            </Link>
          </div>
          <div className="form-container">
            <form className="form-recovery">
              <i
                className="fas fa-chevron-circle-left recovery-back"
                onClick={closeChangePassword}
              ></i>
              <div>
                <label htmlFor="email" className="login-label">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  className="login-input"
                  value={values.email}
                  onChange={handleEmailInput}
                  required
                />
              </div>
              <div className="crear-cuenta-button-container">
                <button
                  className="sendRecovery login-button"
                  onClick={changePassword}
                >
                  Send recovery mail
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="login-page-container">
      <div className="login-container">
        <div className="login-logo">
          <Link to="/Product-designer">
            <img src={Logo} alt="Logo" className="login-logo-img" />
          </Link>
        </div>
        <div className="form-container">
          <form>
            <div>
              <label htmlFor="email" className="login-label">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="login-input"
                value={values.email}
                onChange={handleEmailInput}
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="login-label">
                Contraseña:
              </label>
              <input
                type="password"
                id="password"
                className="login-input"
                value={values.password}
                onChange={handlePasswordInput}
                required
              />
            </div>
            <div className="login-button-container">
              <button type="submit" className="login-button" onClick={singIn}>
                Log in
              </button>
              <button
                className="recovery login-button"
                onClick={openChangePassword}
              >
                I forgot my password :(
              </button>
            </div>
            <div className="crear-cuenta-button-container">
              <button className="login-button" onClick={register}>
                Create account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
