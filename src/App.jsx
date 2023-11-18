import { Route, Switch } from "react-router-dom";
import "./App.css";
import { functioncontext } from "./Authcontext";
import { Allcontext } from "./Authcontext";
import Nowplaying from "./component/Nowplaying";
import Popular from "./component/Popular";
import Topdmovieetail from "./component/Topdetail";
import Top_rated from "./component/Top_rated";
import Upcoming from "./component/Upcoming";
import Search from "./component/Search";
import { SkeletonTheme } from "react-loading-skeleton";
import Footer from "./component/Footer";

<import>Top_ra</import>;
function App() {
  return (
    <>
      <div className="bg-gray-600">
        <SkeletonTheme>
          <Switch>
            <Route path="/">
              <Search />
              <Route path="/" exact>
                <Popular />
                <Top_rated />
                <Upcoming />
                <Nowplaying />
                <Footer/>
                
              </Route>
              <Route path="/:id">
                <Topdmovieetail />
               
              </Route>
            </Route>
          </Switch>
        </SkeletonTheme>
      </div>
    </>
  );
}

export default App;
