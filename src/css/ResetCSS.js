import { createGlobalStyle, css } from 'styled-components';
import themeGet from '@styled-system/theme-get';

export const ResetCSS = createGlobalStyle`${css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  menu,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  html {
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *:focus {
    outline: none;
  }

  /* html,
  html a,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  p,
  li,
  dl,
  th,
  dt,
  input,
  textarea,
  span,
  div {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
  } */

  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    -webkit-tap-highlight-color: transparent;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI',
      Roboto, 'Helvetica Neue', Arial, sans-serif;
  }

  li {
    list-style-type: none;
  }

  a {
    &:hover,
    &:link,
    &:visited,
    &:active {
      text-decoration: none;
      color: inherit;
    }
  }

  button {
    border: 0;
    outline: none;
    cursor: pointer;
    border: 1px solid ${themeGet('colors.borderMain')};
    color: ${themeGet('default.color')};
    font-size: ${themeGet('default.fontSize')};
    background-color: transparent;
  }

  abbr {
    text-decoration: none;
  }

  textarea {
    font-family: ${props => props.theme.default.fontFamily};
  }

  table {
    padding: 0;
    border: 0;
    border-spacing: 0px;
    border-collapse: collapse;
  }
  th,
  td {
    padding: 0;
  }
`}`;
