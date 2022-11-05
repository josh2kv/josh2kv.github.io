import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import themeGet from '@styled-system/theme-get';
import { ResetCSS } from '../css/ResetCSS';
import { GlobalStyle } from '../css/GlobalStyle';
import TabBar from './TabBar';
import Profile from './Profile';
import theme from '../css/theme';
import { device, breakpoints } from '../css/breakpoints.js';

const Layout = ({ tabs, selectedTab, handleClickTab, children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ResetCSS />
        <GlobalStyle />
        <LayoutWrapper>
          <ContainerWrapper>
            <main>
              <TabBar
                tabs={tabs}
                selectedTab={selectedTab}
                handleClickTab={handleClickTab}
              />
              <div className="content">{children}</div>
            </main>
            <aside>
              <Profile />
            </aside>
          </ContainerWrapper>
        </LayoutWrapper>
      </ThemeProvider>
    </>
  );
};

const LayoutWrapper = styled.div`
  display: grid;
  min-height: 100vh;

  background: ${themeGet('colors.bgBody')};
`;

const ContainerWrapper = styled.div`
  display: flex;

  margin: auto;
  height: 100vh;
  overflow: hidden;
  border: 1px solid ${themeGet('colors.borderSub')};
  border-radius: ${themeGet('borderRadius.section')};
  box-shadow: ${themeGet('shadows.section')};
  background-color: ${themeGet('colors.bgSection')};

  main {
    flex: 1;

    .content {
      padding: 3.2rem 0 3.2rem 4rem;
      margin: auto;
    }
  }

  aside {
    display: none;
  }

  ${device.small} {
    max-width: ${({ width }) => width || `${breakpoints[0]}px`};
    width: 100%;
  }

  ${device.medium} {
    max-width: ${({ width }) => width || `${breakpoints[1]}px`};
    width: 100%;
    height: 88vh;
  }

  ${device.large} {
    max-width: ${({ width }) => width || `${breakpoints[2]}px`};
    width: 100%;

    aside {
      display: block;
      width: 25%;
      border-left: 1px solid ${themeGet('colors.borderSub')};
    }
  }

  ${device.xlarge} {
    max-width: ${({ width }) => width || `${breakpoints[3]}px`};
    width: 100%;
  }

  ${device.xxlarge} {
    max-width: ${({ width }) => width || `${breakpoints[4]}px`};
    width: 100%;
  }
  /* 
  ${device.xxxlarge} {
    max-width: ${({ width }) => width || `${breakpoints[5]}px`};
    width: 100%;
  } */
`;

export default Layout;
