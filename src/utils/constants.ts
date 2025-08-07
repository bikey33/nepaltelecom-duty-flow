// Constants for the Duty Chart Management System

export const COMPANY_NAME = "Nepal Telecom";
export const APP_NAME = "Duty Chart Management System";

export const ROUTES = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  DUTY_CHART: '/duty-chart',
  EMPLOYEES: '/employees',
  ATTENDANCE: '/attendance',
  SCHEDULE: '/schedule',
  REPORTS: '/reports',
  SETTINGS: '/settings',
  LOGIN: '/login',
  REGISTER: '/register'
} as const;

export const USER_ROLES = {
  ADMIN: 'admin',
  SUPERVISOR: 'supervisor',
  EMPLOYEE: 'employee',
} as const;

export const SHIFT_STATUS = {
  SCHEDULED: 'scheduled',
  COMPLETED: 'completed',
  MISSED: 'missed',
  SWAPPED: 'swapped',
} as const;