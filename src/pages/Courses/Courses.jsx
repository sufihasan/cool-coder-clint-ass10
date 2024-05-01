import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import LeftSidebar from "../Shared/LeftSidebar/LeftSidebar";
import CourseCard from "../Home/CourseCard";
import Footer from "../Shared/Footer/Footer";


const Courses = () => {
    const courses = useLoaderData();


    return (

        <div>
            <Navbar></Navbar>
            <h2 className="text-4xl font-bold text-center mb-4">Welcom to Our Courses</h2>


            <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                <div >
                    <LeftSidebar
                        courses={courses}>

                    </LeftSidebar>
                </div>

                {/* course container */}
                <div className="md:col-span-5 grid grid-cols-1 md:grid-cols-3 gap-6">

                    {
                        courses.map(aCourses => <CourseCard
                            key={aCourses.id}
                            courses={aCourses}
                        >

                        </CourseCard>)
                    }

                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Courses;