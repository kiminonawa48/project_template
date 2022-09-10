import React, { useState, useEffect } from 'react';
import { Layout } from 'antd'

import HeaderNav from './header';
import Sidebar from './sidebar';

// import { useAuth } from 'routes/auth/ProvideAuth'

const { Content } = Layout;
// const { Title } = Typography;

const MainLayout = ({ children, title }) => {

    const [collapse, setCollapse] = useState(false);


    useEffect(() => {

        window.innerWidth <= 760 ? setCollapse(true) : setCollapse(false);


    }, []);

    return (
        <>
            <Layout>

                <Sidebar collapse={collapse}/>

                <Layout>

                    <HeaderNav collapse={collapse} setCollapse={setCollapse}/>

                    <Content style={{ margin: '0px 0px', padding: 12, minHeight: "calc(100vh - 65px)" }}>

                        {children}

                    </Content>

                </Layout>

            </Layout>
        </>
    );
}

export default MainLayout;
