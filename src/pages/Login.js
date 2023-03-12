import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export default function Login() {

  const { isAuth, setIsAuth } = useContext(AuthContext);

  function login(evt) {
    evt.preventDefault();
    setIsAuth(true);
  }

  return (
    <main className="content">
      <section className="login">
        <form className="form form_login" onSubmit={login}>
          <div className="form__row">
            <label htmlFor="loginName" className="form__label">Name</label>
            <input
              name="loginName"
              type="text"
              className="form__input"
              placeholder="Your name..."
            />
          </div>
          <div className="form__row">
            <label htmlFor="loginPassword" className="form__label">Password</label>
            <input
              name="loginPassword"
              type="password"
              className="form__input"
              placeholder="Your password..."
            />
          </div>
          <button
            type="submit"
            className={`form__submit button`}
          >Log in</button>
        </form>
      </section>
    </main>
  )
}
