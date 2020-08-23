import React from 'react'
import { connect } from 'react-redux';
import Login from './Login';
import Dashboard from './Dashboard';

function Layout({ isAuthenticated }) {
  return (
    <>
      {
        !isAuthenticated
          ? <Login />
          : <Dashboard />
      }
    </>
  )
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.session.isAuthenticated,
});

export default connect(mapStateToProps)(Layout);
