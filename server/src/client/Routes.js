import HomePage from './pages/HomePage';
import UsersListPage, {loadData} from './pages/UsersListPage';
import NotFoundPage from './pages/NotFoundPage';
import App from './App';

export default [
  {
    ...App,
    routes: [
      {
        path: '/',
        ...HomePage,
        exact: true
      },
      {
        path: '/users',
        ...UsersListPage
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
