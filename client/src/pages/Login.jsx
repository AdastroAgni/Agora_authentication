import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../features/authSlice";

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const { email, password } = formData;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    );

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }

        if (isSuccess || user) {
            window.location = "/";
        }

        dispatch(reset());
    }, [user, isError, isSuccess, message, navigate, dispatch]);

    function handleInputChange(event) {
        event.preventDefault();

        setFormData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    }

    function handleFormSubmit(event) {
        event.preventDefault();

        const userData = {
            email,
            password,
        };

        dispatch(login(userData));
    }

    return (
        <>
            <section className="heading">
                <p>Login into account</p>
            </section>
            <section className="form">
                <form onSubmit={handleFormSubmit}>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={email}
                            placeholder="Please enter an email"
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            value={password}
                            placeholder="Please enter a password"
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-block">Login</button>
                    </div>
                </form>
            </section>
        </>
    );
}

export default Login;
