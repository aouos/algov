import React, { memo } from 'react';
import { Layout } from 'tdesign-react';

import './style.less';
import AMenu from '../menu';
import AHeader from '../header';

const { Header, Content } = Layout;

const prefix = 'home-page';

const Home = memo(() => {
  return (
    <Layout className={`${prefix}`}>
      <AMenu></AMenu>
      <Layout>
        <Header className={`${prefix}-header`}>
          <AHeader></AHeader>
        </Header>
        <Content></Content>
      </Layout>
    </Layout>
  );
});

export default Home;
