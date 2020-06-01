import React from "react";
import { Route, Switch } from "react-router-dom";

import Auth from "./Auth";
import Quest from "../Routes/Quest";
import QuestEdit from "../Routes/QuestEdit";
import QuestDetail from "../Routes/QuestDetail";

const LoggedInRoutes = () => (
  <Switch>
    <Route exact path="/" component={Auth} />
    <Route exact path="/quest" component={Quest} />
    <Route path="/quest/edit" component={QuestEdit} />
    <Route path="/quest/detail/:id" component={QuestDetail} />
  </Switch>
);

const AppRouter = () => <LoggedInRoutes />;

export default AppRouter;
