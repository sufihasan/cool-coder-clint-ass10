import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";


const Blog = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className="card w-full bg-base-100 shadow-xl my-5">
                <div className="card-body">
                    <h2 className="card-title">what is cors?</h2>
                    <p>CORS, or Cross-Origin Resource Sharing,
                        is a mechanism that allows many resources (e.g., fonts, JavaScript, etc.)
                        on a web page to be requested from another
                        domain outside the domain from which the resource originated.
                    </p>
                </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl my-5">
                <div className="card-body">
                    <h2 className="card-title">Why are you using firebase?</h2>
                    <p>Firebase provides detailed documentation and cross-platform app development SDKs, to help you
                        build and ship apps for iOS, Android, the web, Flutter, Unity, and C++.
                    </p>
                </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl my-5">
                <div className="card-body">
                    <h2 className="card-title">How does the private route work?</h2>
                    <p>Private Routes in React are routes that require authentication
                        before granting access to specific components or pages. They ensure
                        that only authenticated users can navigate
                        to designated parts of the application, adding a layer of security.</p>
                </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl my-5">
                <div className="card-body">
                    <h2 className="card-title">What is Node? How does Node work?</h2>
                    <p>Node.js is an open-source JavaScript runtime built on Chrome's V8 engine.
                        It executes JavaScript code outside of web browsers, enabling server-side
                        scripting. Node.js operates asynchronously and event-driven, efficiently
                        managing multiple concurrent tasks. Its modular architecture allows easy
                        extension through modules, facilitating rapid development.
                        With a built-in HTTP module, Node.js simplifies creating web servers.
                        Leveraging npm, developers access a vast ecosystem of packages for enhanced
                        functionality. Node.js' cross-platform compatibility ensures seamless
                        deployment across diverse operating systems,
                        making it a versatile choice for scalable, high-performance applications.</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog;