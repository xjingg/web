import React, { Component } from "react";
import Intro from "./Intro";

let proj1 = { id: 1 };
class IntroList extends Component {
    render() {
        return (
            <div>
                <h1>Selected Projects</h1>

                <Intro projlink="/Detail" />
                <Intro />
            </div>
        );
    }
}

export default IntroList;
