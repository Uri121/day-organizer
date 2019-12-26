import React from "react";
import { connect } from "react-redux";
import {Link } from 'react-router-dom';
import signup from "../assets/signup.svg";
import * as mutations from "../store/mutations";

const SignupComponent = ({ requestCreateUserAccount, authenticated }) => {
  return (
    <div className="container">

      <div className="card">
        <div className="card-title">
          <h2>Create Account</h2>
        </div>
        <div className="card-body">
          <form onSubmit={requestCreateUserAccount}>
            <input id="user"
              type="text"
              placeholder="User Name"
              name="userName"
            />
            <input id="password"
              type="password"
              placeholder="Password"
              name="password"
            />
            {authenticated === mutations.USERNAME_RESERVED  ? (
                <p>A user by that name already exists.</p>
            ) : null}
            <button type="submit">
              Go <img src={signup} alt=""></img>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({session})  => ({
  authenticated: session.auth
});

const mapDispatchToProps = (dispatch)=>({
    requestCreateUserAccount(e){
        e.preventDefault();
        let username = e.target[`userName`].value;
        let password = e.target[`password`].value;
        console.log("Creating!",username,password);
        dispatch(mutations.requestCreateUserAccount(username,password));
    }
})

export const ConnectedSignup = connect(mapStateToProps, mapDispatchToProps)(SignupComponent);
