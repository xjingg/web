import React from "react";
import Person from "../Common/Person";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

const Layout = props => {
    return (
        <div>
            <Person />
            <Header />
            {props.children}
            <Footer />
        </div>
    );
};

export default Layout;
