import { useState } from 'react';
import apps from '../apps';
import store from '../store/store'
import '../App.scss';
import HomeContent from './Content';
import routerMap from '../router/routerMap';
import { Layout, Menu, Button } from 'antd';
const { Header, Sider, Content } = Layout;

function Index(props) {
  const [storeState, setStoreState] = useState(store.getGlobalState())


  store.onGlobalStateChange((state, prevState) => {
    console.log(state)
    setStoreState(state)
  })


  const push = (title, href) => {
    window.location.href = '#' + href
  }

  const logout = () => {
    localStorage.setItem('user','')
    window.location.href = '/login'
  }

  

  return (
    <div className="mainapp">
      <Layout>
        <Sider>
          <div className='logo'>
            <img alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
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
          <Header>
            <span className='mainapp-header-store'>{`基座中显示-主应用的数据：${JSON.stringify(storeState)}`}</span>
            <span className='logout'>
              <Button type="link" block onClick={logout}>
                退出登录
              </Button>
            </span>
          </Header>
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
