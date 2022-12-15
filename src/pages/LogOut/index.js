import { Navigate } from "react-router-dom";
import { logOut } from "../../service/user";

const LogOutPage = () => {
    logOut();
    return <Navigate to="/login" />
}

export default LogOutPage;