import React, { memo } from 'react';
import { Layout } from 'tdesign-react';

import './style.less';
import AMenu from '../menu';
import AHeader from '../header';
import AContent from '../content';

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
        <Content className={`${prefix}-content`}>
          <AContent></AContent>
        </Content>
      </Layout>
    </Layout>
  );
});

export default Home;
