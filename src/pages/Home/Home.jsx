import { useState } from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import Cover from "./Cover";
import { Link } from "react-router-dom";


const Home = () => {

    return (
        <div>
            <Navbar></Navbar>
            <Cover></Cover>
            <div className="hero py-10 my-6 bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-3xl font-bold">Welcome to Cool Coder</h1>
                        <p className="py-6">Cool Coder is one of the software learning platform in Bangladesh</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

            <div className="my-4 mx-auto w-8/12">
                <div className="card shadow-md bg-primary text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title">Enroll This Course</h2>
                        <p>Our Web Development program is Start 10 May 2024</p>
                        <p>Go to <Link to='/courses'><span className="btn btn-secondary">Courses</span></Link> </p>
                    </div>
                </div>

            </div>

            <div className="m-auto w-3/4 mb-4">
                <div className="stats shadow">

                    <div className="stat">

                        <div className="stat-title">Total Teacher</div>
                        <div className="stat-value text-primary">20+</div>
                        <div className="stat-desc">Every one is Expreenced</div>
                    </div>

                    <div className="stat">

                        <div className="stat-title">Total Student</div>
                        <div className="stat-value text-secondary">3000</div>
                        <div className="stat-desc">10% get weaver</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <div className="avatar online">
                                <div className="w-16 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                        </div>
                        <div className="stat-value">80% student Get job</div>
                        <div className="stat-title">Strong Job placement cell</div>
                        <div className="stat-desc text-secondary">Learn and earn</div>
                    </div>

                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Home;