import { useEffect, useState } from 'react';
import apps from '../apps';
import store from '../store/store'
import classNames from 'classnames';
import '../App.css';
import HomeContent from './Content';
import routerMap from '../router/routerMap';
import { Layout,Menu } from 'antd';
const { Header, Sider, Content } = Layout;

function Index(props) {
  const [activeUrl, setActiveUrl] = useState(apps?.[0]?.activeRule);
  const [storeState, setStoreState] = useState(store.getGlobalState())


  store.onGlobalStateChange((state, prevState) => {
    console.log(state)
    setStoreState(state)
  })

  useEffect(() => {
    const path = window?.location?.pathname;
    const activeMenu = apps.find(item => path?.includes(item.activeRule));
    if (activeMenu) {
      setActiveUrl(activeMenu?.activeRule);
    }
  }, [])
  const push = (title, href) => {
    console.log(href)
    setActiveUrl(href);
    // window.history.pushState({}, title, '#'+href);
    window.location.href = '#' + href
  }
 
  return (
    <div className="mainapp">
      <Layout>
        <Sider>
          <div className='logo'>
          <img alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"/>
          Ant Design
          </div>
          <Menu>
            {apps.map((menu) => (
              <Menu.Item key={`${menu.container}_${menu.activeRule}`} onClick={() => push(null, menu.activeRule, menu.activeRule)}>
                {menu.name}
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout>
          <Header>Header</Header>
          <Content>
            <main id="subapp-viewport"></main>
            <HomeContent routerMap={routerMap} />
          </Content>
        </Layout>
      </Layout>

    </div>
  );
}

export default Index;
