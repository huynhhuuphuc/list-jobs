export default [
  {
    name: 'cv-dashboard',
    path: '/cv-dashboard',
    icon: 'profile',
    component: './CvDashboard/features/CVList',
  },
  {
    name: 'detail',
    path: '/cv-dashboard/detail/:id',
    component: './CvDashboard/features/CVList/components/ViewCV',
  },
  {
    name: 'candidateName',
    path: '/candidateName/detail/:id',
    component: './CvDashboard/features/CVList/components/NameCandidate',
  },
  {
    path: '/',
    redirect: '/cv-dashboard',
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
