import { withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminLayoutRoute from '../../commons/Layout/AdminLayoutRoute';
import theme from '../../commons/theme';
import CommonModal from '../../components/CommonModal';
import Loading from '../../components/Loading';
import { ADMIN_ROUTERS } from '../../constants';
import configureStore from '../../redux/configureStore';
import styles from './styles';

const store = configureStore();

class App extends Component {
  renderAdminRouters() {
    let xhtml = null;
    xhtml = ADMIN_ROUTERS.map(route => {
      return (
        <AdminLayoutRoute
          key={route.path}
          path={route.path}
          component={route.component}
          exact={route.exact}
          name={route.name}
        />
      );
    });
    return xhtml;
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <ToastContainer />
            <Loading />
            <CommonModal />
            <Switch>{this.renderAdminRouters()}</Switch>
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
