import App from './components/app';

function loadRoute(cb) {
 return (module) => cb(null, module.default);
}

function errorLoading(err) {
  console.error(`Dynamic page loading failed ${err}`);
}

const routes = {
  component: App,
  childRoutes: [
    {
      path: '/',
      getComponent(location, cb) {
        System.import('./containers/App/index').then(loadRoute(cb)).catch(errorLoading);
      }
    },
    {
      path: 'product',
      getComponent(location, cb) {
        System.import('./containers/Product/index').then(loadRoute(cb)).catch(errorLoading);
      }
    }
  ]
};

export default routes;
