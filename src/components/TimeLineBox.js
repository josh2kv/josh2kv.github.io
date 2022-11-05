import themeGet from '@styled-system/theme-get';
import React from 'react';
import styled from 'styled-components';
import { device } from '../css/breakpoints';

const TimeLineBox = ({ content }) => {
  return (
    <Block>
      <div className="sub-title">
        <span className="sub-title__main">{content.subTitle.main}</span>
        <span className="sub-title__sub">{content.subTitle.sub}</span>
      </div>
      <div className="title">{content.title}</div>
      <ul className="details">
        {content.details.map(detail => (
          <li key={detail}>{detail}</li>
        ))}
      </ul>
    </Block>
  );
};

const Block = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  /* margin-right: 4rem; */
  width: 83%;
  border-radius: 4px;
  padding: 3rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 35%;
    /* bottom: 0; */
    width: 1px;
    height: 30%;
    background-color: ${themeGet('colors.primary')};
  }

  .sub-title {
    &__main {
      font-weight: ${themeGet('fontWeights.bold')};
      font-size: ${themeGet('fontSizes.s5')};
    }

    &__sub {
      margin-left: 1rem;
      color: ${themeGet('colors.textSub')};
      font-weight: ${themeGet('fontWeights.extraLight')};
    }
  }

  .title {
    margin-bottom: 1rem;
    font-size: ${themeGet('fontSizes.s7')};
    font-weight: ${themeGet('fontWeights.light')};
  }

  .details {
    font-weight: ${themeGet('fontWeights.light')};
  }

  ${device.medium} {
    width: 80%;
  }
`;

export default TimeLineBox;
