/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Layout, Menu, Dropdown, Row, Col, Space, Button } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined
} from '@ant-design/icons';


import { UserOutlined, PoweroffOutlined } from '@ant-design/icons';
// import { useHistory } from 'react-router-dom'
import { useAuth } from 'routes/auth/ProvideAuth'
// import { useTranslation } from 'react-i18next'

// import { useHistory } from 'react-router';


const { Header } = Layout;

const HeaderNav = ({ collapse, setCollapse }) => {

    const { logout } = useAuth()
    // const [activeLanguage, setActiveLanguage] = useState('English')

    // const history = useHistory();

    const handleToggle = (e) => {
        e.preventDefault();
        collapse ? setCollapse(false) : setCollapse(true);
    }

    // const { i18n, t } = useTranslation();

    const menu = (
        <Menu style={{ paddingLeft: '8px', paddingRight: '8px' }} id='layout-header' >
            <Menu.Item
                key="0"
            >
                {/* <b>{userData.firstname + " " + userData.lastname}</b> */}
            </Menu.Item>


            <Menu.Divider />

            <Menu.Item
                key="5"
                className="p-menu-list"
                icon={<PoweroffOutlined />}
                onClick={async () => {
                    await logout()
                }}
            >
                Log out
            </Menu.Item>
        </Menu>
    );

    // const languages = [
    //     {
    //         code: 'en',
    //         name: 'English',
    //     },
    //     {
    //         code: 'la',
    //         name: 'ພາສາລາວ',
    //     },
    //     {
    //         code: 'th',
    //         name: 'ภาษาไทย',
    //     },
    // ]

    // const language = (
    //     <Menu
    //         style={{ paddingLeft: '8px', paddingRight: '8px' }}
    //         selectedKeys={[activeLanguage]}
    //     >
    //         {languages.map(({ code, name }) => (

    //             <Menu.Item
    //                 key={name}
    //                 onClick={() => {
    //                     setActiveLanguage(`${name}`)
    //                     i18n.changeLanguage(`${code}`)
    //                 }}
    //             >
    //                 <b>{name}</b>
    //             </Menu.Item>
    //         ))}
    //     </Menu>
    // );

    return (
        <>
            <Header
                className="site-layout-sub-header-background"
                style={{ paddingLeft: 15, paddingRight: 25 }}
            >
                <Row>

                    <Col flex="100px">
                        {React.createElement(collapse ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: handleToggle,
                            style: { color: "#001529" }
                        })}
                    </Col>

                    <Col flex="auto"></Col>

                    <Space align="center">

                        <Dropdown overlay={menu} arrow={true} trigger={['click']}>
                            <a className="ant-dropdown-link" href="#" onClick={e => e.preventDefault()}>
                                <Button
                                    shape="circle"
                                    icon={<UserOutlined />}
                                    size="medium"
                                />
                            </a>
                        </Dropdown>

                        {/* <Dropdown overlay={language} arrow={true} trigger={['click']}>
                            <Button
                                type="link"
                                style={{ color: 'black' }}
                            >
                                {activeLanguage} <DownOutlined />
                            </Button>
                        </Dropdown> */}
                    </Space>
                </Row>

            </Header>
        </>
    )
}

export default HeaderNav
