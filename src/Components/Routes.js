import React from "react";
import { Route, Switch } from "react-router-dom";

import Auth from "./Auth";
import Quest from "../Routes/Quest";
import QuestCreate from "../Routes/QuestCreate";
import QuestDetail from "../Routes/QuestDetail";
import QuestEdit from "../Routes/QuestEdit";
import QuestWrong from "../Routes/QuestWrong";

const LoggedInRoutes = () => (
  <Switch>
    <Route exact path="/" component={Auth} />
    <Route exact path="/quest" component={Quest} />
    <Route path="/quest/create/:number" component={QuestCreate} />
    <Route path="/quest/edit/:id" component={QuestEdit} />
    <Route path="/quest/detail/:id" component={QuestDetail} />
    <Route path="/quest/wrong" component={QuestWrong} />
  </Switch>
);

const AppRouter = () => <LoggedInRoutes />;

export default AppRouter;
