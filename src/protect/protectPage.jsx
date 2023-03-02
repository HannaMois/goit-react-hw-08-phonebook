import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn, selectRefreshed } from 'redux/auth/auth-selectors';

function ProtectPage(Component, navigateTo) {
  const ProtectComponent = props => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectRefreshed);

    return isLoggedIn && !isRefreshing ? (
      <Component {...props} />
    ) : (
      <Navigate to={navigateTo} />
    );
  };

  return ProtectComponent;
}

export default ProtectPage;
