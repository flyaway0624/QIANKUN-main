import Todo from '../components/Todo';
// eslint-disable-next-line import/no-anonymous-default-export
export default [
  { path: '/react', name: 'Home' },
  { path: '/about', name: 'Home' },
  {
    path: '/todo',
    component: Todo,
    name: '主应用Todo'
  }
];
