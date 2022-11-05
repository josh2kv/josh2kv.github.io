import themeGet from '@styled-system/theme-get';
import { createGlobalStyle, css } from 'styled-components';
import { device } from './breakpoints.js';

export const GlobalStyle = createGlobalStyle`${css`
  ::selection {
    background: ${props => props.theme.colors.primary};
    color: #ffffff;
  }

  html {
    font-size: 50%; // 1rem = 8px

    // Medium Device >=768
    ${device.medium} {
      font-size: 56.25%; // 1rem = 9px
    }

    // Extra Large Device >=1200
    ${device.xlarge} {
      font-size: 62.5%; // 1rem = 10px
    }
  }

  body {
    font-size: ${themeGet('default.fontSize')};
    font-weight: ${themeGet('default.fontWeight')};
    line-height: ${themeGet('default.lineHeight')};
    letter-spacing: ${themeGet('default.letterSpacing')};
    color: ${themeGet('default.color')};
    font-family: ${themeGet('default.fontFamily')};

    width: 100%;
  }

  h1 {
    font-size: ${themeGet('fontSizes.s11')};
  }
  h2 {
    font-size: ${themeGet('fontSizes.s8')};
  }
  h3 {
    font-size: ${themeGet('fontSizes.s7')};
    line-height: ${themeGet('lineHeights.tight')};
  }
  h4 {
    font-size: ${themeGet('fontSizes.s6')};
  }
  h5 {
    font-size: ${themeGet('fontSizes.s5')};
  }
  h6 {
    font-size: ${themeGet('fontSizes.s4')};
  }

  .text-underline {
    text-decoration: underline;
  }
`}`;
