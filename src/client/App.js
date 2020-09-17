import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from './containers/Home/Home';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import ResetPassword from './containers/ResetPassword';
import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute';
import { useAuthentication } from './hooks/useAuthentication';
import Header from './components/NavigationHeader/NavigationHeader';
import Profile from './containers/Profile';
import Channels from './containers/Channels/Channels';
import Channel from './containers/Channel/Channel';
import Loader from './components/Loader/Loader';
import { UserContext } from './context/userContext';
import { ChannelContext } from './context/channelContext';

function App() {
  const { isAuthenticated, isLoading, user } = useAuthentication();
  if (isLoading) return <Loader />;
  return (
    <UserContext.Provider value={user}>
      <Router>
        <Header isAuthenticated={isAuthenticated} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <SignIn exact path="/sign-in" />
          <SignUp exact path="/sign-up" />
          <ResetPassword exact path="/reset-password" />
          <AuthenticatedRoute
            exact
            path="/profile"
            isAuthenticated={isAuthenticated}
          >
            <Profile />
          </AuthenticatedRoute>
          <AuthenticatedRoute
            exact
            path="/channel"
            isAuthenticated={isAuthenticated}
          >
            <Channels />
          </AuthenticatedRoute>
          <ChannelContext.Provider>
            <Route exact path="/channel/:id" isAuthenticated={isAuthenticated}>
              <Channel />
            </Route>
          </ChannelContext.Provider>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
