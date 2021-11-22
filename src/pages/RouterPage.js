import React,{useContext} from 'react'
import { Layout, Menu } from 'antd';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate ,
  Redirect,
  Switch
} from 'react-router-dom';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

import { Ingresar } from './Ingresar';
import { Cola } from './Cola';
import { CrearTicket } from './CrearTicket';
import { Escritorio } from './Escritorio';
import {UiContext} from '../context/UiContext';

const { Header, Sider, Content } = Layout;


export const RouterPage = () => {

  const {ocultarMenu} = useContext(UiContext);


    return (
      <Router>
           <Layout style={{ height:'100vh'}}>
            <Sider collapsedWidth="0" breakpoint="md" hidden={ocultarMenu}>
              <div className="logo" />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<UserOutlined />}>
                  <Link to="/ingresar">
                      Ingresar
                  </Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                  <Link to="/cola">
                      Cola de tickets
                  </Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<UploadOutlined />}>
                  <Link to="/crear">
                      Crear tickets
                  </Link>
                </Menu.Item>
              </Menu>
            </Sider>
              <Layout className="site-layout">
                <Content
                  className="site-layout-background"
                  style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                  }}
                >
                  <Switch>
                    <Route exact path="/ingresar" component={Ingresar } />
                    <Route exact path="/cola" component={ Cola} />
                    <Route exact path="/crear" component={CrearTicket} />
                    <Route exact path="/escritorio" component={Escritorio} /> 
                    <Redirect to="/ingresar" />
                  </Switch>
                </Content>
            </Layout>
          </Layout>
      </Router>     
       
    )
}
