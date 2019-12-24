import  { connect } from 'react-redux';
import {Link } from 'react-router-dom';
import React  from 'react';

const Navigation =()=>(
    <div className="navigation">
        <Link to="/dashboard">
        <h1>Day Organizer</h1>
        </Link>
       
    </div>
);
export const ConnectedNavigation = connect(state=>state)(Navigation);