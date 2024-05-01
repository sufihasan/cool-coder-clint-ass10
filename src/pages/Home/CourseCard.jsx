import { FaBook, FaClock, FaMoneyBill } from "react-icons/fa";
import { Link } from "react-router-dom";


const CourseCard = ({ courses }) => {
    const { course_title, image_url, description, id, course_duration, course_price, lessons } = courses;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl mb-6">
            <figure><img className="h-40" src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{course_title}</h2>
                <p>{description}</p>

                {/* {description.length > 150 ? <p>{description.slice(0, 200)}
                    <Link
                        to={`/news/${id}`}
                        className="text-blue-600"> read more...</Link></p> : <p>{description}</p>} */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <p className="flex justify-center items-center">
                        <FaClock className="mr-2"></FaClock> <span>{course_duration}</span></p>
                    <p className="flex justify-center items-center">
                        <FaBook className="mr-2"></FaBook> <span>{lessons} Lessons</span></p>
                    <p className="flex justify-center items-center">
                        <FaMoneyBill className="mr-2"></FaMoneyBill> <span>{course_price} Tk</span></p>

                </div>

                <div className="card-actions justify-end">

                    <Link
                        to={`/courses/${id}`}
                        className=""><button className="btn btn-primary">Datails</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;