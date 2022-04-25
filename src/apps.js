import store from './store/store'
const microApps = [
  {
    name: '微应用Home',
    entry: process.env.REACT_APP_SUB_REACT,
    activeRule: '/#/react',
    container: '#subapp-viewport',
  },
  {
    name: '微应用About',
    entry: process.env.REACT_APP_SUB_REACT,
    activeRule: '/#/about',
    container: '#subapp-viewport',
  },
  {
    name: '主应用Todo',
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
