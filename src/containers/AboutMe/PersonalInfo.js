import React from 'react';
import styled from 'styled-components';
import themeGet from '@styled-system/theme-get';
import { aboutMe } from '../../data';
import { device } from '../../css/breakpoints';

const PersonalInfo = () => {
  return (
    <Block>
      {aboutMe.personalInfo.map(el => (
        <li key={el.label}>
          <span className="label">{el.label}</span>
          <span className="detail">{el.detail}</span>
        </li>
      ))}
    </Block>
  );
};

const Block = styled.ul`
  margin-bottom: 3rem;

  li {
    display: flex;
    gap: 1rem;

    .label {
      max-width: 10rem;
      width: 100%;
      letter-spacing: ${themeGet('letterSpacings.wide')};
      font-weight: ${themeGet('fontWeights.medium')};
    }

    .detail {
      font-weight: ${themeGet('fontWeights.extraLight')};
    }
  }

  ${device.medium} {
    margin-bottom: 4rem;
  }
`;
export default PersonalInfo;
