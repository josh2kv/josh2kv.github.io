import { palette } from './presetPalettes';

const theme = {
  colors: {
    palette,
    bgBody:
      'radial-gradient(66.66% 66.66% at 50% 0%, #32333f 0%, rgba(50, 51, 63, 0) 100% ), linear-gradient(180deg, #05070b 0%, #17171d 100%)',
    bgSection: 'rgba(255, 255, 255, 0.03)',
    overlay: 'rgba(0, 0, 0, 0.4)',
    primary: palette.amber6,
    textMain: palette.neutInv.primary,
    textSub: palette.neutInv.secondary,
    textInv: palette.neut.primary,
    textDisabled: 'rgba(255, 255, 255, 0.8)',
    borderMain: palette.zinc8,
    borderSub: '#32333F',
    textAccent: `linear-gradient(to bottom, ${palette.amber3}, ${palette.amber6})`,
  },

  fontSizes: {
    s1: '1rem',
    s2: '1.2rem',
    s3: '1.4rem',
    s4: '1.6rem',
    s5: '1.8rem',
    s6: '2rem',
    s7: '2.4rem',
    s8: '2.8rem',
    s9: '3.2rem',
    s10: '3.6rem',
    s11: '4rem',
    s12: '4.8rem',
    s13: '5.6rem',
    s14: '6.4rem',
  },
  fontWeights: {
    extraLight: 100,
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },
  lineHeights: { short: 0.75, none: 1, tight: 1.25, normal: 1.6, loose: 2 },
  letterSpacings: {
    tight: '-0.05rem',
    normal: '0em',
    wide: '0.1em',
    wider: '.25em',
  },
  shadows: {
    section: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
    minimum: '0 2px 2px 0 rgba(0, 0, 0, 0.25)',
    selected: '0 6px 26px 6px rgba(0, 0, 0, 0.3);',
  },
  borderRadius: {
    section: '4px',
    small: '2px',
  },
  transition: {
    normal: 'all 0.4s ease 0s',
  },
  default: {
    color: palette.neutInv.primary,
    fontFamily: '"Noto Sans KR", sans-serif',
    fontSize: '1.6rem',
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacings: 'normal',
  },
};

export default theme;
