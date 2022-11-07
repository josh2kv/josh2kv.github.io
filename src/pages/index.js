import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import Home from '../containers/Home';
import AboutMe from '../containers/AboutMe';
import PortFolio from '../containers/Portfolio';
import { ScreenProvider } from '../hooks/useScreenContext';

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
  const [selectedTab, setSelectedTab] = useState('home');

  const handleClickTab = tab => {
    setSelectedTab(tab);
  };

  return (
    <ScreenProvider>
      <Helmet
        defer={false}
        htmlAttributes={{ lang: 'kr' }}
        title="SHJ's Portfolio"
        meta={[
          {
            name: `description`,
            content: `Seongho Jo's portfolio homepage to get a job`,
          },
          // {
          //   property: `og:title`,
          //   content: title,
          // },
          // {
          //   property: `og:description`,
          //   content: metaDescription,
          // },
          // {
          //   property: `og:type`,
          //   content: `website`,
          // },
          // {
          //   property: `og:url`,
          //   content: `${data.site.siteMetadata.siteUrl}${location.pathname}`,
          // },
          // {
          //   property: `og:image`,
          //   content: `${data.site.siteMetadata.siteUrl}${ogImage.images.fallback.src}`,
          // },
          // {
          //   property: 'og:image:width',
          //   content: `${ogImage.width}`,
          // },
          // {
          //   property: 'og:image:height',
          //   content: `${ogImage.height}`,
          // },
        ]}
        // .concat(
        //   metaKeywords.length > 0
        //     ? {
        //         name: `keywords`,
        //         content: metaKeywords.join(`, `),
        //       }
        //     : [],
        // )
        // .concat(meta)}
      />
      <Layout
        tabs={tabs}
        selectedTab={selectedTab}
        handleClickTab={handleClickTab}
      >
        {tabs.find(tab => tab.id === selectedTab).content}
      </Layout>
    </ScreenProvider>
  );
};

// const detailsQuery = graphql`
//   query DefaultSEOQuery {
//     site {
//       siteMetadata {
//         title
//         description
//         author
//         siteUrl
//         keywords
//       }
//     }
//     ogImage: file(
//       absolutePath: { glob: "**/src/assets/images/etc/og-image.png" }
//     ) {
//       childImageSharp {
//         gatsbyImageData(quality: 100, layout: FIXED, width: 1200)
//       }
//     }
//   }
// `;
export default IndexPage;
