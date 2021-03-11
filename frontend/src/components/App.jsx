import { React, useState, useEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { BaseProvider, LightTheme, DarkTheme, } from "baseui";
import Home from "pages/Home";
import Login from "pages/Login";
import Signup from "pages/Signup";
import AppNavbar from "components/navbar/AppNavbar";
import { DARK_THEME } from "utils/appConsts";
import Footer from "components/layouts/FooterLayout";
import AuthorizedRoute from "components/routes/AuthorizedRoute";
import Profile from "pages/Profile";
import "components/App.css";

const engine = new Styletron();

export const App = ({ history }) => {
  const [theme, setTheme] = useState(localStorage.getItem(DARK_THEME) ? DarkTheme : LightTheme);

  useEffect(() => {
    document.body.style.background = theme.colors.backgroundPrimary;
    if (theme === DarkTheme) localStorage.setItem(DARK_THEME, true);
    else localStorage.removeItem(DARK_THEME);
  }, [theme]);

  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={theme}>
        <div className="App">
          <Router history={history}>
            <AppNavbar toggleTheme={() => setTheme(theme === DarkTheme ? LightTheme : DarkTheme)} />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" exact component={Login} />
              <Route path="/signup" exact component={Signup} />
              <AuthorizedRoute path="/profile" exact component={Profile} />
            </Switch>
            <Footer />
          </Router>
        </div>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;