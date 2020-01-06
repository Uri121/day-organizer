import React from "react";
import { connect } from "react-redux";
import {Link } from 'react-router-dom';
import login from "../assets/sign-in-alt-solid.svg";
import * as mutations from "../store/mutations";

const LoginComponent = ({ authUser, authenticated }) => {
  return (
    <div className="container">
    <Link to="/signup" className="sign-up">
        <h5>Sign up</h5>
        </Link>
      <div className="card">
        <div className="card-title">
          <h2>Login</h2>
        </div>
        <div className="card-body">
          <form onSubmit={authUser}>
            <input id="user"
              type="text"
              placeholder="User Name"
              name="userName"
              required={true}            
            />
            <input id="password"
              type="password"
              placeholder="Password"
              name="password"
              required={true}           
            />
            {authenticated === mutations.NOT_AUTHENTICATED ? (
              <p>Login incorrect</p>
            ) : null}
            <button type="submit">
              Go <img src={login} alt=""></img>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ session }) => ({
  authenticated: session.auth
});

const mapDispatchToProps = dispatch => ({
  authUser(e) {
    e.preventDefault();
    let userName = e.target["userName"].value;
    let password = e.target["password"].value;
    dispatch(mutations.requsetAuthUser(userName, password));
  }
});

export const ConnectedLogin = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);
