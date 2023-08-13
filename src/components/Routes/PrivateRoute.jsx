import { useContext } from "react";
import { ctx } from "./LoginContext";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
    const { authstate } = useContext(ctx);
    if (authstate) {
        return children;
    } else {
        return <Navigate to='/' />
    }
}
export default PrivateRoute;