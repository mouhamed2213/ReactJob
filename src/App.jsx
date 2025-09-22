import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

//page
import HomePage from './pages/HomePage';
import Jobs from './pages/jobs';
import Job from './pages/job';
import MainLayout from './Layouts/MainLayout';
import AddJobPage from './pages/AddJobPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  // delcare route elemnts
  const routes = createRoutesFromElements(
    <>
      {/* User Page Route  */}
      <Route path="/" Component={MainLayout}>
        <Route index Component={HomePage} />
        <Route path="jobs" Component={Jobs} />
        <Route path="job/:id" Component={Job} />
        <Route path="add-job" element={<AddJobPage />} />

        {/* Not found page  */}
        <Route path="*" Component={NotFoundPage} />
      </Route>
    </>
  );
  // wrapp route elemnt
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default App;
