import { Navigate } from 'react-router';
  const ProtectedRoute = ({ isAuthenticated,element }) => {
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }
    return element;
  
}
export default ProtectedRoute