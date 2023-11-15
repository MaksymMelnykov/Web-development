import React from "react";
import {
  Layout,
  Menu,
  Breadcrumb,
  Badge,
  Card,
  List,
  Statistic,
  Flex,
  Typography,
} from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  NotificationOutlined,
  MessageOutlined,
  LikeOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class AdminPage extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Dashboard
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Orders
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="Users">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Teams">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />} />
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <div style={{ padding: "0 24px", minHeight: 64, color: "white" }}>
              Admin Dashboard
            </div>
          </Header>
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <Flex wrap="wrap" gap={10}>
                <Card
                  title="Карточка користувача"
                  extra={<a href="#">Більше</a>}
                  style={{ width: 300 }}
                >
                  <p>Контент картки</p>
                  <p>Контент картки</p>
                  <p>Контент картки</p>
                </Card>
                <Card
                  title="Карточка користувача"
                  extra={<a href="#">Більше</a>}
                  style={{ width: 300 }}
                >
                  <p>Контент картки</p>
                  <p>Контент картки</p>
                  <p>Контент картки</p>
                </Card>
                <Card
                  title="Карточка користувача"
                  extra={<a href="#">Більше</a>}
                  style={{ width: 300 }}
                >
                  <p>Контент картки</p>
                  <p>Контент картки</p>
                  <p>Контент картки</p>
                </Card>
                <Card
                  title="Карточка користувача"
                  extra={<a href="#">Більше</a>}
                  style={{ width: 300 }}
                >
                  <p>Контент картки</p>
                  <p>Контент картки</p>
                  <p>Контент картки</p>
                </Card>
              </Flex>

              <List
                style={{
                  marginTop: 16,
                  marginBottom: 16,
                }}
                header={<div>Список повідомлень</div>}
                footer={
                  <div>
                    Ant Design Admin Page ©2023 Created by Maksym Melnykov
                  </div>
                }
                bordered
                dataSource={[
                  "Повідомлення 1",
                  "Повідомлення 2",
                  "Повідомлення 3",
                ]}
                renderItem={(item) => (
                  <List.Item>
                    <Typography.Text mark>[ITEM]</Typography.Text>
                    {item}
                  </List.Item>
                )}
              />

              <Flex wrap="wrap" justify="space-between">
                <Statistic
                  title="Час в системі"
                  value={999}
                  prefix={<ClockCircleOutlined />}
                />
                <Statistic
                  title="Лайки"
                  value={999}
                  prefix={<LikeOutlined />}
                />
                <Statistic
                  title="Коментарі"
                  value={999}
                  prefix={<MessageOutlined />}
                />
              </Flex>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design Admin Page ©2023 Created by Maksym Melnykov
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default AdminPage;
