import App from './components/app';
import Home from './containers/App/index';

function loadRoute(cb) {
 return (module) => cb(null, module.default);
}

function errorLoading(err) {
  console.error(`Dynamic page loading failed ${err}`);
}

const routes = {
  component: App,
  path: '/',
  indexRoute: { component: Home },
  childRoutes: [
    {
      path: 'product/:slug',
      getComponent(location, cb) {
        System.import('./containers/Product/index').then(loadRoute(cb)).catch(errorLoading);
      }
    }
  ]
};

export default routes;
