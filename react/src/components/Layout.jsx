import {Link, Outlet} from "react-router-dom";
const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/get">Get</Link>
                    </li>
                    <li>
                        <Link to="/post">Post</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </>
    );
};

export default Layout;
