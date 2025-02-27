export default [
  {
    path: '/dashboard',
    icon: 'profile',
    name: 'cv-dashboard',
    component: './CvDashboard/features/CVList',
  },
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    path: '/404',
    layout: false,
    component: './404',
  },
  {
    path: '/403',
    layout: false,
    component: './403',
  },
  {
    layout: false,
    component: './404',
  },
];
