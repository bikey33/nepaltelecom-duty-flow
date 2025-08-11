import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '@/layouts/MainLayout';
import { ScheduleLayout } from '@/layouts/ScheduleLayout';
import { ROUTES } from '@/utils/constants';

// Pages
import Index from '@/pages/Index';
import Dashboard from '@/pages/Dashboard';
import DutyChart from '@/pages/DutyChart';
import Employees from '@/pages/Employees';
import Attendance from '@/pages/Attendance';
import Schedule from '@/pages/Schedule';
import Reports from '@/pages/Reports';
import Settings from '@/pages/Settings';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import NotFound from '@/pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Index />
      },
      {
        path: ROUTES.DASHBOARD,
        element: <Dashboard />
      },
      {
        path: ROUTES.DUTY_CHART,
        element: <DutyChart />
      },
      {
        path: ROUTES.EMPLOYEES,
        element: <Employees />
      },
      {
        path: ROUTES.ATTENDANCE,
        element: <Attendance />
      },
      {
        path: ROUTES.REPORTS,
        element: <Reports />
      },
      {
        path: ROUTES.SETTINGS,
        element: <Settings />
      }
    ]
  },
  {
    path: ROUTES.SCHEDULE,
    element: <ScheduleLayout><Schedule /></ScheduleLayout>
  },
  {
    path: ROUTES.LOGIN,
    element: <Login />
  },
  {
    path: ROUTES.REGISTER,
    element: <Register />
  },
  {
    path: '*',
    element: <NotFound />
  }
]);