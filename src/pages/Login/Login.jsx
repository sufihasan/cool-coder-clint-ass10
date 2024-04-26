import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";


const Login = () => {
    const { loginUser } = useContext(AuthContext);
    const handleLogin = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        // console.log(email, password);

        loginUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div>
            <Navbar></Navbar>

            <div>
                <h2 className="text-3xl text-center">Please login</h2>

                {/*login form */}

                <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center mt-3">Don not have an account please <Link
                    className="text-blue-600 font-bold" to="/register">Register</Link></p>
            </div>
            <div className="divider w-1/2 m-auto mt-3">OR</div>
            <div className="mx-auto w-1/2 text-center text-xl">
                <button className="btn w-full my-4">
                    <FaGoogle className="text-2xl"></FaGoogle>
                    Google
                </button>
                <button className="btn w-full">
                    <FaGithub className="text-2xl"></FaGithub>
                    Github
                </button>

            </div>
        </div>
    );
};

export default Login;