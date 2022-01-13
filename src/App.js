import logo from "./logo.svg";
import "./App.css";
import { LoginButton } from "./components/LoginButton";
import { Profile } from "./components/Profile";
import { LogoutButton } from "./components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
      <header className="App-header">
        <picture className="header-picture">
          <div className="App-header-login">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Imagotipo_de_la_Universidad_de_la_Amazonia.svg/1024px-Imagotipo_de_la_Universidad_de_la_Amazonia.svg.png"
              className="App-logo"
              alt="logo"
            />
          </div>
        </picture>

        <p App-header-login>
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}{" "}
        </p>
      </header>
      <main>
        <Profile />
      </main>
      <footer>Desarrollo Colectivo 2020</footer>
    </div>
  );
}

export default App;
