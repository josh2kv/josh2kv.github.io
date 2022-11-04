import React from 'react';
import styled from 'styled-components';
import themeGet from '@styled-system/theme-get';
import SectionTitle from '../../components/SectionTitle';
import DividerH from '../../components/DividerH';
import PersonalInfo from './PersonalInfo';
import HaveDoneList from './HaveDoneList';
import { aboutMe } from '../../data';

const AboutMe = () => {
  return (
    <Block>
      <SectionTitle title="summary" />
      <div className="title">{aboutMe.title}</div>
      <DividerH />
      <p className="intro">{aboutMe.intro}</p>
      <PersonalInfo />
      <HaveDoneList />
    </Block>
  );
};

const Block = styled.div`
  margin-right: 3rem;

  .title {
    font-size: ${themeGet('fontSizes.s10')};
    font-weight: ${themeGet('fontWeights.medium')};
    margin-top: -0.6rem;
  }

  .intro {
    font-weight: ${themeGet('fontWeights.light')};
    margin-top: 3rem;
    margin-bottom: 4rem;
  }
`;

export default AboutMe;
