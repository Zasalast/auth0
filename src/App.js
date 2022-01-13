import "./App.scss";

import { Profile } from "./components/Profile";

import { useAuth0 } from "@auth0/auth0-react";
import { Headers } from "./layouts/Headers/Header";
import Footers from "./layouts/Footers/Footers";
import { Contents } from "./layouts/Contents/Contents";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
      <Headers />
      <Contents>
        <Profile />
      </Contents>
      <Footers />
    </div>
  );
}

export default App;
