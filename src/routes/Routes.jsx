import { createBrowserRouter } from "react-router-dom";
import Roots from "../layouts/Roots";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Courses from "../pages/Courses/Courses";
import CourseDetails from "../pages/Courses/CourseDetails";
import CoursePremium from "../pages/Courses/CoursePremium";
import PrivateRoutes from "./PrivateRoutes";
import Blog from "../pages/Blog/Blog";
import { object } from "prop-types";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Roots></Roots>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://cool-coder-sarver-ass10.vercel.app/courses',)
            },
            {
                path: '/courses/:id',
                element: <CourseDetails></CourseDetails>
            },
            {
                path: '/courses/premium/:id',
                element: <PrivateRoutes><CoursePremium></CoursePremium></PrivateRoutes>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    },
]);

export default router;