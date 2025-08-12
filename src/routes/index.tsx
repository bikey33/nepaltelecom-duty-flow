import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '@/layouts/MainLayout';
import { ScheduleLayout } from '@/layouts/ScheduleLayout';
import { ROUTES } from '@/utils/constants';

// Pages
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
import { ProtectedRoute } from '@/routes/ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <Login />
      },
      {
        path: ROUTES.LOGIN,
        element: <Login />
      },
      {
        element: <MainLayout />,
        children: [
          {
            path: ROUTES.DASHBOARD,
            element: (
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            )
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
        path: ROUTES.REGISTER,
        element: <Register />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
]);