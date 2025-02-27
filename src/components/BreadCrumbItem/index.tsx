import { Link } from 'umi';

function BreadCrumbItem(route: any, params: any, routes: any, paths: any) {
  const last = routes.indexOf(route) === routes.length - 1;
  return last ? (
    <span>{route.breadcrumbName}</span>
  ) : (
    <Link to={'/' + paths.join('/')}>{route.breadcrumbName}</Link>
  );
}

export default BreadCrumbItem;
