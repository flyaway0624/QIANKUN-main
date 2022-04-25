import { useEffect, useState } from 'react';
import apps from '../apps';
import store from '../store/store'
import classNames from 'classnames';
import '../App.css';
import Content from './Content';
import routerMap from '../router/routerMap';


function Index(props) {
  const [activeUrl, setActiveUrl] = useState(apps?.[0]?.activeRule);
  const [storeState,setStoreState] = useState(store.getGlobalState())


  store.onGlobalStateChange((state, prevState)=>{
    console.log(state)
    setStoreState(state)
  })

  useEffect(() => {
    const path = window?.location?.pathname;
    const activeMenu = apps.find(item => path?.includes(item.activeRule));
    if(activeMenu) {
      setActiveUrl(activeMenu?.activeRule);
    }
  }, [])
  const push = (title, href) => {
    console.log(href)
    setActiveUrl(href);
    // window.history.pushState({}, title, '#'+href);
    window.location.href = '#'+href
  }
  const getMenuClassName = (activeRule) => {
    return classNames('mainapp-header-sidemenu-sub', {
      'mainapp-header-sidemenu-sub-active': activeUrl === activeRule,
    });
  }
  return (
    <>
      <div className="mainapp">
        {/* 标题栏 */}
        <header className="mainapp-header">
          <ul className="mainapp-header-sidemenu">
            {/* 侧边栏 */}
            {apps.map((menu) => (
              <li key={`${menu.container}_${menu.activeRule}`} className={getMenuClassName(menu.activeRule)} onClick={() => push(null, menu.activeRule, menu.activeRule)}>{menu.name}</li>
            ))}
          </ul>
          <span className='mainapp-header-store'>{`基座中显示-主应用的数据：${JSON.stringify(storeState)}`}</span>
        </header>
        <div className="mainapp-main">
          {/* 子应用 */}
          {/* <Loading loading={loading} /> */}
        <main id="subapp-viewport"></main>
          <Content routerMap={routerMap}/>
        </div>
      </div>
    </>
  );
}

export default Index;
