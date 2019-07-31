import React, { Component } from "react";
import { Link } from "react-router-dom";

class Detail extends Component {
    state = {
        projs: {
            id: "1",
            title: "web dev",
            content: "",
            info: ""
        }
    };

    render() {
        return (
            <Link to={`/hotel`}>
                <h1> {this.state.projs.title}</h1>
            </Link>
        );
    }
}

export default Detail;
