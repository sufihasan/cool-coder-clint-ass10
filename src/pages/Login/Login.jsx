import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Footer from "../Shared/Footer/Footer";

const Login = () => {
    const { loginUser, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();


    const handleLogin = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        // console.log(email, password);

        loginUser(email, password)
            .then(result => {
                console.log(result.user);
                navigate(location.state ? location.state : '/');
                e.target.reset();

            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleGoogleSignin = () => {

        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                navigate(location.state ? location.state : '/');
            })
            .catch(error => console.error(error))
    }


    const handleGithubSignIn = () => {
        signInWithGithub()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                navigate(location.state ? location.state : '/');
            })
            .catch(error => {
                console.log('error', error);
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
                <button onClick={handleGoogleSignin} className="btn w-full my-4">
                    <FaGoogle className="text-2xl"></FaGoogle>
                    Google
                </button>
                <button onClick={handleGithubSignIn} className="btn w-full">
                    <FaGithub className="text-2xl"></FaGithub>
                    Github
                </button>

            </div>

            <Footer></Footer>
        </div>
    );
};

export default Login;