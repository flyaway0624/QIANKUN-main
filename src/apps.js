import store from './store/store'
const microApps = [
  {
    name: 'Homw',
    entry: process.env.REACT_APP_SUB_REACT,
    activeRule: '/react',
    container: '#subapp-viewport',
  },
  {
    name: 'About',
    entry: process.env.REACT_APP_SUB_REACT,
    activeRule: '/react/about',
    container: '#subapp-viewport',
  },
  {
    name: 'Todo',
    entry: process.env.REACT_APP_SUB_REACT,
    activeRule: '/todo',
    container: null,
  }
]

const apps = microApps.map(item => {
  return {
    ...item,
    props: {
      routerBase: item.activeRule,
      getGlobalState: store.getGlobalState,
    }
  }
})

export default apps
