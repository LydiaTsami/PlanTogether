import { Outlet } from "react-router-dom";
import "./Administration.css";

const Administration: React.FC = () =>
{
    return (
        <div className={"administration-container"}>
            <div className={"administration-title"}>Administration</div>
            <Outlet />
        </div>
    );
};

export default Administration;
