import  { connect } from 'react-redux';
import {Link } from 'react-router-dom';
import {ConnectedUsernameDisplay} from './UserNameDisplay'
import React  from 'react';
import * as mutations from '../store/mutations';

const Navigation =({id,authenticated})=>(
    <div className="navigation">
        <Link to="/dashboard">
        <h1>Day Organizer</h1>
        </Link>
        { authenticated ?
            <h4>
                Welcome, <ConnectedUsernameDisplay id={id}/>!
               
            </h4>
            : null
        }
       
    </div>
);

const mapStateToProps = ({session})=>({
    id:session.id,
    authenticated:session.auth == mutations.AUTHENTICATED
});

export const ConnectedNavigation = connect(mapStateToProps)(Navigation);