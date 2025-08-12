import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';
import { ROUTES } from '@/utils/constants';

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isAuthed = typeof window !== 'undefined' && localStorage.getItem('auth') === 'true';
  if (!isAuthed) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }
  return <>{children}</>;
};
