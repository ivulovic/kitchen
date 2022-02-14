import { authActions } from 'app/providers/AuthProvider/slice';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './style.scss';

const initialState = {
  email: '',
  password: '',
  confirmPassword: '',
  firstName: '',
  lastName: '',
};

enum Page {
  Login = 'login',
  Register = 'register',
}

export default function AuthPage() {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [page, setPage] = useState(Page.Login);
  useEffect(() => {
    setForm(initialState);
  }, [page]);
  const [form, setForm] = useState(initialState);
  const onChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    const { email, password, firstName, lastName } = form;
    if (page === Page.Register) {
      dispatch(authActions.register({ email, password, firstName, lastName }));
    } else {
      dispatch(authActions.login({ email, password }));
    }
  };
  const changePage = () => {
    const newPage = page === Page.Login ? Page.Register : Page.Login;
    if (page !== newPage) {
      setPage(newPage);
    }
  };
  return (
    <div className="auth-page">
      <h1>{page === 'login' ? 'Login' : 'Register'}</h1>
      <div className="form-wrapper">
        {page === Page.Register && (
          <>
            <div className="input-wrapper">
              <label>* First name</label>
              <input
                required
                value={form.firstName}
                name="firstName"
                type="text"
                onChange={onChange}
                placeholder="Enter your real name"
              />
            </div>
            <div className="input-wrapper">
              <label>* Last name</label>
              <input
                value={form.lastName}
                name="lastName"
                type="text"
                onChange={onChange}
                placeholder="Enter your real last name"
              />
            </div>
          </>
        )}
        <div className="input-wrapper">
          <label>* E-mail</label>
          <input
            value={form.email}
            name="email"
            type="email"
            placeholder="Enter your company e-mail"
            onChange={onChange}
          />
        </div>
        <div className="input-wrapper">
          <label>* Password</label>
          <input
            value={form.password}
            name="password"
            type="password"
            onChange={onChange}
            placeholder="Choose your password"
          />
        </div>
        {page === Page.Register && (
          <div className="input-wrapper">
            <label>* Confirm Password</label>
            <input
              value={form.confirmPassword}
              name="confirmPassword"
              type="password"
              onChange={onChange}
              placeholder="Confirm your password once more"
            />
          </div>
        )}
        {page === Page.Register && (
          <span className="warning">
            Please fill all fields correctly. We will need correct data for
            ordering information.
          </span>
        )}
        <button className="flat-button active" onClick={handleSubmit}>
          {page === Page.Login ? 'Login' : 'Register'}
        </button>

        <button className="flat-button" onClick={changePage}>
          {page === Page.Login
            ? 'Not having account? register'
            : 'Already registered? Login'}
        </button>
      </div>
    </div>
  );
}
