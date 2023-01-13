import { logOut } from "../../service/user";

const LogOutPage = () => {
    logOut();
    window.location.pathname = "/login";
    return <div />
}

export default LogOutPage;