import NotFound from '@/pages/exception/404'
import AuthorizedDenied from '@/pages/exception/403'

export const exception = [
  {
    type: 404,
    path: '/home/404',
    title: '页面未找到',
    component: NotFound
  },
  {
    type: 403,
    path: '/home/403',
    title: '页面未找到',
    component: AuthorizedDenied
  }
];
