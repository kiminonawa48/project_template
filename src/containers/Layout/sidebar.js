import React, { useState, useEffect } from 'react';
import { Menu, Layout, Divider, Space } from 'antd';

import { useHistory } from 'react-router';

import SideBarMenu from './SideBarMenu/index'

import './styles/index.less'

// import { useTranslation } from 'react-i18next'

import { useDispatch, useSelector } from 'react-redux';
import { setThemeName } from 'actions/cutom_theme_name';

const { Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar = ({ collapse }) => {

    const [userData, setUserData] = useState(1)

    const history = useHistory();

    // const { t } = useTranslation();

    var p = window.location.pathname
    const key_open_sidebar = p.substring(0, p.lastIndexOf('/'))

    const custom_theme_name = useSelector(state => state.custom_theme_name)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setThemeName('light'))
        setUserData(1)
    }, [dispatch]);

    const user_role = [userData === 1 ? "admin" : null]

    const user_permissions = []

    // console.log(user_role.find((str) => str === "ops") || "");

    return (
        <Sider
            theme={custom_theme_name}
            breakpoint="lg"
            collapsedWidth="60"
            width={250}
            id="layout-sidebar"
            trigger={null}
            collapsible
            collapsed={collapse}
            className="site-layout-background"
        >

            <div >

                {
                    collapse === false ?
                        <Space direction="horizontal" style={{ width: '100%', justifyContent: 'center' }}>
                            <img src={'/ant-design-logo.png'} className="logo-image" alt="logo" />
                        </Space>
                        :
                        <img src={'/ant-design-icon.png'} className="logo-sub-image" alt="logo" />
                }

            </div>

            <Divider style={{ margin: "4px"}} />

            <Menu
                theme={custom_theme_name}
                mode="inline"
                selectedKeys={[history.location.pathname]}
                defaultSelectedKeys={[history.location.pathname]}
                defaultOpenKeys={[key_open_sidebar]}
            >

                {SideBarMenu.map((sb, i) => {
                    // if (sb.role.join(',') === user_role.join(',') || sb.role.join(',') === "") {
                    if (user_role.find((str) => str === sb.role) || sb.role === "") {
                        if (sb.sub_menu === true) {
                            return (
                                <SubMenu
                                    key={sb.path_name}
                                    icon={sb.icon_name}
                                    title={sb.title_name}
                                >
                                    {
                                        
                                        sb.children.map((sub, i) => {
                                            // if (sub.permissions.join(',') === user_permissions.join(',') || sub.permissions.join(',') === "") {
                                            if (user_permissions.find((str) => str === sub.permissions.join(',')) || sub.permissions.join(',') === "") {
                                                return (
                                                    <Menu.Item
                                                        key={sub.sub_path_name}
                                                        onClick={() => history.push(sub.sub_path_name)}
                                                    >
                                                        {sub.sub_title_name}
                                                    </Menu.Item>
                                                )
                                            }else{
                                                return null
                                            }
                               
                                        })
                                    }
                                </SubMenu>
                            )
                        } else {
                            return (
                                <Menu.Item key={sb.path_name} onClick={() => history.push(sb.path_name)}>

                                    {sb.icon_name}

                                    <span>{sb.title_name}</span>

                                </Menu.Item>
                            )

                        }
                    } else {
                        return null
                    }


                })}


            </Menu>

        </Sider>
    )
}

export default Sidebar
