import React  from 'react';
import { connect } from 'react-redux';
import * as mutations from '../store/mutations';

const LoginComponent=({authUser,authenticated})=>{
    return<div>
        <h2>
            Please login
        </h2>
        <form onSubmit={authUser}>
            <input type="text" placeholder="User Name" name="userName" defaultValue="Dev"/>
            <input type="password" placeholder="Password" name="password" defaultValue="TUPLES"/>
            {authenticated===mutations.NOT_AUTHENTICATED ? <p>Login incorrect</p>:null}
            <button type="submit">Login</button>
        </form>
    </div>
};

const mapStateToProps=({session})=>({
    authenticated:session.auth
});

const mapDispatchToProps=(dispatch)=>({

    authUser(e){
        e.preventDefault();
        let userName= e.target['userName'].value;
        let password= e.target['password'].value;
        dispatch(mutations.requsetAuthUser(userName,password));
    }
});

export const ConnectedLogin = connect(mapStateToProps,mapDispatchToProps)(LoginComponent);