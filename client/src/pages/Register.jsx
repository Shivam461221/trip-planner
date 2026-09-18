import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerWithEmail } from "../services/authService";

export default function Register() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            await registerWithEmail(
                formData.email,
                formData.password
            );

            navigate("/dashboard");
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <h1>Register</h1>

            {error && <p>{error}</p>}

            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />

                <button type="submit">
                    Register
                </button>
            </form>
        </div>
    );
}