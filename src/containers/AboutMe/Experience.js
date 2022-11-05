import themeGet from '@styled-system/theme-get';
import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../../components/SectionTitle';
import TimeLineBox from '../../components/TimeLineBox';
import { aboutMe } from '../../data';

const Experience = () => {
  return (
    <Block>
      <div className="section">
        <SectionTitle title="work experience" />
        <div className="time-line">
          {aboutMe.workExperience.map(el => (
            <TimeLineBox content={el} />
          ))}
        </div>
      </div>
      <div className="section">
        <SectionTitle title="education" />
        <div className="time-line">
          {aboutMe.education.map(el => (
            <TimeLineBox content={el} />
          ))}
        </div>
      </div>
      <div className="section">
        <SectionTitle title="etc" />
        <ul>
          {aboutMe.etc.map(el => (
            <li>{el}</li>
          ))}
        </ul>
      </div>
    </Block>
  );
};

const Block = styled.div`
  margin-right: 3rem;

  display: flex;
  flex-direction: column;
  gap: 4rem;

  .section {
    font-weight: ${themeGet('fontWeights.light')};
  }

  .time-line {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;
export default Experience;
