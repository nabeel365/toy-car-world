import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div>
            <progress className="progress w-56" value="0" max="100"></progress>
            <br />
            <progress className="progress w-56" value="10" max="100"></progress>
            <br />
            <progress className="progress w-56" value="40" max="100"></progress>
            <br />
            <progress className="progress w-56" value="70" max="100"></progress>
            <br />
            <progress className="progress w-56" value="100" max="100"></progress>
        </div>
    }


    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace={true} ></Navigate>;
};

export default PrivateRoute;