import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./Components/Hoc/Layout";
import Home from "./Components/Home";
import Detail from "./Components/Detail";

const Routes = props => {
    return (
        <Layout>
            <Switch>
                <Route path="/detail" component={Detail} />
                <Route path="/home" component={Home} />
                <Route path="/"  exact component={Home} />

            </Switch>
            <div></div>
            <div>/</div>
        </Layout>
    );
};

export default Routes;
