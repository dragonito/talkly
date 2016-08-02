import "babel-polyfill";
import React from "react";
import {Router, Route, IndexRoute} from "react-router";
import history from "../../services/History";
import Layout from "./Layout";
import Login from "../Security/Login";
import Index from "../Topic/Index";
import Calendar from "../Topic/Calendar";
import Archive from "../Topic/Archive";
import ShowTopic from "../Topic/ShowTopic";
import EditTopic from "../Topic/EditTopic";
import ArchiveTopic from "../Topic/ArchiveTopic";
import Profile from "../User/Profile";
import NotFound from "../NotFound/NotFound";

export default () => {
    return (
        <Router history={history}>
            <Route name="/login" path="login" component={Login}/>
            <Route path="/" component={Layout}>
                <IndexRoute component={Index}/>
                <Route name="profile" path="profile" component={Profile}/>
                <Route name="calendar" path="calendar" component={Calendar}/>
                <Route name="archive" path="archive" component={Archive}/>
                <Route name="show" path="topic/:id" component={ShowTopic}/>
                <Route name="edit" path="topic/:id/edit" component={EditTopic}/>
                <Route name="edit" path="topic/:id/archive" component={ArchiveTopic}/>
            </Route>
            <Route path="*" component={NotFound} />
        </Router>
    );
}