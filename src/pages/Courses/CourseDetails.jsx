import { useEffect, useState } from "react";
import { FaBook, FaClock, FaFileDownload, FaMoneyBill } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";




const CourseDetails = () => {
    const { id } = useParams();
    const [course, setCourses] = useState({});

    useEffect(() => {
        fetch(`https://cool-coder-sarver-ass10.vercel.app/courses/${id}`)
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [id])



    return (
        <div>
            <Navbar></Navbar>
            <div className="flex justify-end mr-2">
                <div className="btn"><FaFileDownload></FaFileDownload><span>Download Pdf</span></div>
            </div>

            <div className="card lg:card-side bg-base-100 shadow-xl mt-5">
                <figure className="md:w-1/2 px-8"><img src={course.image_url} alt="Album" /></figure>
                <div className="card-body lg:w-1/2">
                    <h2 className="card-title">{course.course_title}</h2>
                    <p>{course.details}</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        <p className="flex justify-center items-center">
                            <FaClock className="mr-2"></FaClock> <span>{course.course_duration}</span></p>
                        <p className="flex justify-center items-center">
                            <FaBook className="mr-2"></FaBook> <span>{course.lessons} Lessons</span></p>
                        <p className="flex justify-center items-center">
                            <FaMoneyBill className="mr-2"></FaMoneyBill> <span>{course.course_price} Tk</span></p>
                        <p className="flex justify-center items-center">
                            <FaPeopleGroup className="mr-2"></FaPeopleGroup> <span>{course.student_number} Student</span></p>

                    </div>
                    <div>
                        <p><span className="font-bold">Course Teacher:</span> {course.course_teacher?.name}</p>
                        <p><span className="font-bold">Course Teacher Position:</span> {course.course_teacher?.teacher_position}</p>
                    </div>
                    <div className="card-actions justify-end">
                        {/* <button className="btn btn-primary">Listen</button> */}
                        <Link
                            to={`/courses/premium/${id}`}
                            className=""><button className="btn btn-primary">Get premium access</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;