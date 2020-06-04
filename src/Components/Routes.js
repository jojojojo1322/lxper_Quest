import React from "react";
import { Route, Switch } from "react-router-dom";

import Auth from "./Auth";
import Quest from "../Routes/Quest/Quest";
import QuestCreate from "../Routes/QuestCreate/QuestCreate";
import QuestDetail from "../Routes/QuestDetail/QuestDetail";
import QuestEdit from "../Routes/QuestEdit/QuestEdit";
import QuestWrong from "../Routes/Quest/QuestWrong";

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
