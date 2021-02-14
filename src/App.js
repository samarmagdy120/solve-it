import { BrowserRouter, Switch, Route } from "react-router-dom";
import Comments from "./components/Comments";
import Header from "./components/Header";
import Posts from "./components/Posts";
import Users from "./components/Users";

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
    <Switch>
      <Route path="/" component={Users} exact />
      <Route path="/posts" component={Posts} />
      <Route path="/comments" component={Comments} />

    </Switch>
  </BrowserRouter>
    </div>
  );
}

export default App;
