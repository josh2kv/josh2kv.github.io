import React, { useState } from 'react';
import Layout from '../components/Layout';
import Home from '../containers/Home';
import AboutMe from '../containers/AboutMe';
import PortFolio from '../containers/Portfolio';

const tabs = [
  {
    id: 'home',
    title: 'home',
    content: <Home />,
  },
  {
    id: 'about-me',
    title: 'about me',
    content: <AboutMe />,
  },
  {
    id: 'portfolio',
    title: 'portfolio',
    content: <PortFolio />,
  },
];

const IndexPage = () => {
  const [selectedTab, setSelectedTab] = useState('portfolio');

  const handleClickTab = tab => {
    setSelectedTab(tab);
  };

  return (
    <Layout
      tabs={tabs}
      selectedTab={selectedTab}
      handleClickTab={handleClickTab}
    >
      {tabs.find(tab => tab.id === selectedTab).content}
    </Layout>
  );
};

export default IndexPage;
