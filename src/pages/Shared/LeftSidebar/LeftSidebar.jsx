import { Link } from "react-router-dom";


const LeftSidebar = ({ courses }) => {
    console.log('hasan', courses)
    return (
        <div>

            {
                courses.map(course => <Link
                    className="block ml-4 text-xl font-semibold"
                    key={course.id}
                    to={`/courses/${course.id}`}
                ><button className="btn my-1 btn-neutral w-full">{course.course_title}</button></Link>)
            }
        </div>
    );
};

export default LeftSidebar;