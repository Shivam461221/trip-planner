import { useNavigate } from "react-router-dom";
import { logout } from "../services/authService";

export default function Dashboard() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();

            navigate("/login");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Dashboard</h1>

            <button onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
}