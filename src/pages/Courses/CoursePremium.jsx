import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";


const CoursePremium = () => {
    const { id } = useParams();

    const [course, setCourses] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/courses/${id}`)
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [id])


    return (
        <div >
            <Navbar></Navbar>
            <div className="text-center">
                <h2 className="text-3xl">Welcome to premium</h2>
                <p><span className="font-bold">Course Name:</span> {course.course_title}</p>
            </div>
        </div>
    );
};

export default CoursePremium;