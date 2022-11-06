import themeGet from '@styled-system/theme-get';
import React from 'react';
import styled from 'styled-components';
import SvgCodeCircle from '../../assets/images/svg/code-circle.svg';
import { device } from '../../css/breakpoints';

const Home = () => {
  return (
    <Block>
      <SvgCodeCircle className="code-circle" />
      <div className="heading">
        <h1>안녕하세요.</h1>
        <h1>
          <span className="accent">성장</span>과{' '}
          <span className="accent">성과</span>에 집중하는 개발자
        </h1>
        <h1>
          <span className="accent">조성호</span>입니다.
        </h1>
      </div>
      <div className="sub-headings-wrapper">
        <div className="sub-heading">
          <h2>스스로 학습하고 성장할 수 있는 잠재력이 있습니다.</h2>
          <p>
            비전공자이지만 줄곧 책과 동영상 강의로 웹개발을 독학했습니다.{' '}
            <br className="md-none" />
            늦게 시작했기 때문에 더 성장에 절실합니다. 개발에 대부분의 시간을
            쏟습니다.
          </p>
        </div>
        <div className="sub-heading">
          <h2>완성도 높은 결과물을 위해 자기주도적으로 일합니다.</h2>
          <p>
            누가 시키지 않아도 더 나은 프로젝트를 위해 필요한 것들을 스스로
            제안하고 학습합니다. <br className="md-none" />
            이러한 모습을 인정받아 프론트엔드쪽을 개발과 거기에 필요한 결정을
            일임받았습니다. <br className="md-none" />
            이는 팀에 긍정적인 효과와 성과로 이어져 그 해 연봉협상에서 기존
            연봉의 125% 이상 인상받았습니다.
          </p>
        </div>
      </div>
    </Block>
  );
};

const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  position: relative;
  width: 100%;
  height: 100%;
  padding-right: 3rem;

  .md-none {
    display: none;
  }

  .code-circle {
    display: none;
    position: absolute;
    right: -10rem;
    top: -10rem;
  }

  .accent {
    font-weight: ${themeGet('fontWeights.bold')};
    background-image: ${themeGet('colors.textAccent')};
    color: ${themeGet('colors.primary')};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .heading {
    h1 {
      font-size: ${themeGet('fontSizes.s8')};
      font-weight: ${themeGet('fontWeights.extraLight')};
    }
  }

  .sub-headings-wrapper {
    display: flex;
    flex-direction: column;
    gap: 4rem;

    .sub-heading {
      h2 {
        font-size: ${themeGet('fontSizes.s6')};
        margin-bottom: 0.4rem;
        /* font-weight: ${themeGet('fontWeights.light')}; */
      }

      p {
        font-weight: ${themeGet('fontWeights.extraLight')};
        color: ${themeGet('colors.textSub')};
      }
    }
  }

  ${device.medium} {
    padding: 2rem;

    .md-none {
      display: inline;
    }

    .code-circle {
      display: inline;
      width: 45rem;
      height: 45rem;
    }

    .heading {
      h1 {
        font-size: ${themeGet('fontSizes.s11')};
      }
    }

    .sub-heading {
      h2 {
        /* font-weight: ${themeGet('fontWeights.light')}; */
      }

      p {
        font-weight: ${themeGet('fontWeights.extraLight')};
        color: ${themeGet('colors.textSub')};
      }
    }
  }
`;
export default Home;
